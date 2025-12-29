const express = require("express");
const app = express();
const port = 8080;

//middleware1
app.use((req, res, next) => {
  console.log("Middle ware 1 runs successfully");
  next();
});

//middleware2
app.use((req, res, next) => {
  console.log("Middleware 2 function runs successfully");
  next();
});

//router
app.get("/", (req, res) => {
  res.send("Hello welcome to ParkerHouse");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port} `);
});
