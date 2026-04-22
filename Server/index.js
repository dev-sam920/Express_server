const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./connection');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is working' });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;