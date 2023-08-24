import express from 'express';

const app = express();
const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('TEST2');
});

app.listen(PORT);
