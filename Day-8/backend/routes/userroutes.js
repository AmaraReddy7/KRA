const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/admin", verifyToken, (req, res) => {
  res.json({ message: "Welcome admin" });
});

router.get("/manager", verifyToken, (req, res) => {
  res.json({ message: "Welcome manager" });
});

router.get("/user", verifyToken, (req, res) => {
  res.json({ message: "Welcome user" });
});

module.exports = router;
