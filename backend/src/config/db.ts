import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'trello',
  password: '123456',
  port: 5432,
});

export const query = (text: string, params?: unknown[]) => {
  return pool.query(text, params);
};

export default pool;
