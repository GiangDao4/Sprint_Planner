import express from 'express';
// import db from './config/db.js';
//import PG from 'pg';
const app = express();
const port = process.env.PORT || 5137;
// import { Pool } from 'pg';

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: Number(process.env.DB_PORT),
// });
app.use(express.json());
// pool.connect().then(() => {
//   console.log('Connected to PostgreSQL database');
// }).catch((err) => {
//   console.error('Error connecting to PostgreSQL database:', err);
// });
app.get('/', (req, res) => {
  res.json('backend is runningl');
});
// app.get('/api/users', async (req, res) => {
//   try {
//     const result = await pool.query('select * from users');
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
app.get('/api/ping', (req, res) => {
  res.json('pong from backenda');
});
app.listen(port, () => {
  console.log(` Server is listening on http://localhost:${port}`);
});
