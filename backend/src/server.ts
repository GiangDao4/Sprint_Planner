import express from 'express';

const app = express();
const port = process.env.PORT || 5137;

app.use(express.json());

app.get('/', (req, res) => {
  res.json('backend is running');
});
app.get('/api/ping', (req, res) => {
  res.json('pong from backenda');
});
app.listen(port, () => {
  console.log(` Server is listening on http://localhost:${port}`);
});
