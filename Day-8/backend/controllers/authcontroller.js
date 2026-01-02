const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/userModels");

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedpassword,
      role,
    });

    res
      .status(201)
      .json({ message: `User registered successfully ${username}`, newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body; //username
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentails" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credentails" });
    }
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in", error);
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = { register, login };
