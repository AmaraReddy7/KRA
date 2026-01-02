const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authcontroller");

/*router.get('/admin',(req,res) => {
    res.json("welcome admin")
});
router.get('/user',(req,res) => {
    res.json("Welcome user")
})*/

router.post("/login", login);

module.exports = router;
