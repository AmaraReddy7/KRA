import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import router from "./routes/userRoutes.js";
import errorhandling from "./middlewares/errorhandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//Middlewares

app.use(express.json());
app.use(cors);
//routes
app.use("/api", userRoutes);

//errorhandling
app.use(errorhandling);

//serverrunning
app.listen(port, () => {
  console.log(`port is running on http:localhost:${port}`);
});
