const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/admin", verifyToken, (req, res) => {
  res.json({ message: "Welcome admin" });
});

router.get("/manager", (req, res) => {
  res.json({ message: "Welcome manager" });
});

router.get("/user", (req, res) => {
  res.json({ message: "Welcome user" });
});

module.exports = router;
