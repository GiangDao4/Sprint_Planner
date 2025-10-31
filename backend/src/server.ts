import dotenv from "dotenv";
dotenv.config();

// import { db } from "./config/db.js";
import express from "express";
import { Pool } from "pg";

const pool = new Pool({

  user: 'postgres',
  password: '123456',
  host: 'db',
  port: 5432,
  database: 'trello'
});

const app = express();
const port = process.env.PORT || 5137;
// import { Pool } from "pg";

// console.log("Password =", process.env.DB_PASSWORD);



app.use(express.json());
pool.connect()
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

