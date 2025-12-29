const express = require("express");
const app = express();

app.use(express.json());

// Existing phone numbers
const existingPhones = ["9876543210", "8765432109"];

app.post("/create-patient", (req, res) => {
  const { fname, lname, email, dob, phone, gender } = req.body;

  //FirstName
  if (!fname || fname.length < 4 || !/^[A-Za-z]+$/.test(fname)) {
    return res
      .status(400)
      .json({ message: "First name must be at least 4 alphabets" });
  }

  // Lastname
  if (!lname || lname.length < 4 || !/^[A-Za-z]+$/.test(lname)) {
    return res
      .status(400)
      .json({ message: "Last name must be at least 4 alphabets" });
  }

  //Email 
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  //DOB 
  const dobDate = new Date(dob);
  const today = new Date();

  if (!dob || isNaN(dobDate.getTime())) {
    return res.status(400).json({ message: "Invalid DOB format (YYYY-MM-DD)" });
  }

  if (dobDate > today) {
    return res.status(400).json({ message: "DOB cannot be a future date" });
  }

  // Phone 
  if (!/^[89][0-9]{9}$/.test(phone)) {
    return res.status(400).json({
      message: "Phone must be 10 digits and start with 8 or 9",
    });
  }

  if (/^(\d)\1+$/.test(phone)) {
    return res.status(400).json({
      message: "Phone number should not have repeated digits",
    });
  }

  if (existingPhones.includes(phone)) {
    return res.status(400).json({
      message: "Phone number already exists",
    });
  }

  // Gender 
  if (!["M", "F", "O"].includes(gender)) {
    return res.status(400).json({
      message: "Gender must be M, F or O",
    });
  }

  // DTO
  const patientDTO = {
    fname,
    lname,
    email,
    dob,
    phone,
    gender,
  };

  return res.status(201).json({
    message: "Patient created successfully",
    data: patientDTO,
  });
});

app.listen(3000, () => console.log("Server running on port 5000"));
