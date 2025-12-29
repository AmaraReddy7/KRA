const express = require("express");
const router = express.Router();
const app = express();

const port = 8002;

router.use((req, res, next) => {
  console.log("routerlevel middleware is running successfully");
  next();
});

router.get("./user/:id", (req, res) => {
  res.send("user Profile");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
