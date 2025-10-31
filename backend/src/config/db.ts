import { Pool } from "pg";

const pool = new Pool({
  // user: "postgres",
  // host: "127.0.0",
  // database: "trello",
  // password: "123456",
  // port: 5432,
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "trello",
});

export const query = (text: string, params?: unknown[]) => {
  return pool.query(text, params);
};
export const db = pool;
