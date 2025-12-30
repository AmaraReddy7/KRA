const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { users } = require("./data");
const projectRouter = require("./routes/projects");
const port = 5300;
const SECRET_KEY = "123456";

app.use(express.json());

app.use(setUser);
app.use("./projects", projectRouter);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

app.get("/Admin", (req, res) => {
  res.send("Admin Page");
});

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === user.Id);
  }
  next();
}
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
