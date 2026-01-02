const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./config/db");
const app = express();
const authRoutes = require("./routes/authroutes");
const userRoutes = require("./routes/userroutes");

//middlewares
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.send(
      `database connected successfully current time: {result.rows[0].now} `
    );
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
