const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ data: "Data savaed successfully" });
});
router.post("/", (req, res) => {
  res.send({ data: "data added successfully" });
});
router.put("/", (req, res) => {
  res.send({ data: "Data updated successfully" });
});
router.delete("/", (req, res) => {
  res.send({ data: "Data deleted succcessfully" });
});

module.exports = router;
