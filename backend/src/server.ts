import express from 'express';

const app = express();
const port = process.env.PORT || 5137;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});
app.get('api/ping', (req, res) => {
  res.json({ message: 'embemo is goal!' });
});
app.listen(port, () => {
  console.log(` Server is listening on http://localhost:${port}`);
});
