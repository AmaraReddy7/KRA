const express = require("express");
const app = express();
const port = 8082;

app.get("/", (req, res) => {
  res.send("GET request on Homepage");
});
app.post("/", (req, res) => {
  res.send("POST request on homepage");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.all("*", (req, res) => {
  res.status(404).send("404 - page not found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
