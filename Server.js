// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/match', (req, res) => {
  const { query } = req.body;
  // Implement your matching logic here
  res.json({ matches: [] });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
