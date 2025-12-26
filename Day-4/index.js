const express = require("express");
const app = express();
const port = 8080;

const userRoutes = require("./routes/users");
const commentRoutes = require("./routes/comment");

app.use("/users", userRoutes);
app.use("/comment", commentRoutes);

app.listen(port, () => {
  console.log("Server running on port 8080");
});
