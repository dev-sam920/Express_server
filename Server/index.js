const express = require('express');
const app= express();
app.use(express.json());
const cors= require('cors');
require('dotenv').config();
require('./connection')

const PORT= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is working');
});



app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    
})