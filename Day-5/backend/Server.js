const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authroutes");
const bodyparser = require("body-parser");
const app = express();
const port = 3232;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("Welcome to parker house");
});

/*app.post("/login", (req, res) => {
  console.log(req.body);
  // console.log(req.body.email, "email");
  // console.log("password", req.body.password);
  res.send("Welcome");
});*/
app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
