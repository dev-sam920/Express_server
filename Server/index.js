const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./connection');

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'Server is working' });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});