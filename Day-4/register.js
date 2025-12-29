const express = require('express');

const app = express();

const {userValidationRules,validateHandler} = require('./Validations');

// Route with express-validator
app.post("/register", userValidationRules, validateHandler, (req, res) => {
  const { firstname, lastname, email, dob, gender, phoneNumber } = req.body;
  res.status(200).json({
    message: "User data is valid and processed successfully",
    userData: { firstname, lastname, email, dob, gender, phoneNumber },
  });
});
