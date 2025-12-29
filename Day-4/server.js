const express = require("express");

const app = express();

app.use(logger);

app.get("/", (req, res, next) => {
  console.log("Home page");
  res.send("Home page");
  next();
});

app.get("/user", auth, (req, res,next) => {
  console.log(`user is admin : ${req.admin}`);
  console.log("Users page");
  res.send("new user welcome");
  next();
});

/*app.post("./user", (req, res) => {
  res.send("Helloword");
});*/
//Firstname


function logger(req, res, next) {
  console.log("before");
  next();
  console.log("After");
}

function auth(req, res, next) {
  if (req.query.admin === "true") {
    req.admin = "true";
    next();
    return;
  } else {
    res.send("No access");
  }
}

app.listen(8080, () => console.log("server is running"));
