const users = require("../data/users");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;
  // const hashedPassword =  bcript.hash('password',15);

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign(
    {
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1hr" }
  );
  console.log("token", token);

  res.json({
    message: "Login successful",
    data: token,
  });
};
