const express = require("express");
const app = express();
const port = 8000;

app.use((req, res, next) => {
  console.log("Application level middleware function is running");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to Medianv");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
