import dotenv from "dotenv";
dotenv.config();

// import { db } from "./config/db.js";
import express from "express";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

const app = express();
const port = process.env.PORT || 5137;
// import { Pool } from "pg";

console.log("port =", Number(process.env.DB_PORT));
console.log("password =", Number(process.env.DB_PASSWORD));
console.log("host =", process.env.DB_HOST);
console.log("ussf =", process.env.DB_USER);
console.log("database =", process.env.DB_NAME);

app.use(express.json());
pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((error: unknown) => {
    console.error("Error connecting to PostgreSQL database:", error);
  });
app.get("/", (req, res) => {
  res.json("backend is running");
});
app.get("/api/users", async (req, res) => {
  console.log("GET /api/users called1");
  try {
    const result = await pool.query("select * from users");
    res.json(result.rows);
    console.log("Fetched users:", result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/api/ping", (req, res) => {
  res.json("pong from backend");
});
app.get("/api/a", (req, res) => {
  res.json("vietnam");
});

app.listen(port, () => {
  console.log(` Server is listening on http://localhost:${port}`);
});
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});
