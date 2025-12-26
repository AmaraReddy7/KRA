const { body, validationResult } = require("express-validator");

// validation rules as middleware
const userValidationRules = [
  body("firstname")
    .trim()
    .notEmpty()
    .withMessage("First name is required.")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("First name must be alphabets only."),
  body("lastname")
    .trim()
    .notEmpty()
    .withMessage("Last name is required.")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("Last name must be alphabets only."),
  body("email").isEmail().withMessage("Invalid email address."),
  body("dob")
    .isISO8601()
    .toDate()
    .withMessage("Invalid date format (YYYY-MM-DD)."),
  body("gender")
    .notEmpty()
    .withmessage("Please describe your gender.")
    .isin(["male", "female", "other", "notspecified"])
    .withMessage("invalid gender must be in any of them male, female, other, notspecified"),
  body("phoneNumber")
    .isMobilePhone("any")
    .withMessage("Invalid phone number format."),
];

//the validation results
const validateHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  // send 400 response
  res.status(400).json({ errors: errors.array() });
};

module.exports{
    userValidationRules, validateHandler
}

// Example Route with express-validator middleware chain
app.post("/register", userValidationRules, validateHandler, (req, res) => {
  const { firstname, lastname, email, dob, gender, phoneNumber } = req.body;
  res.status(200).json({
    message: "User data is valid and processed successfully",
    userData: { firstname, lastname, email, dob, gender, phoneNumber },
  });
});
