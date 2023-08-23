import express from 'express';

const app = express();
const PORT = app.get('/', (req, res) => {
  res.send('TEST');
});

app.listen(3003);
