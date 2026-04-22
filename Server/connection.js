const mongoose = require('mongoose');
require('dotenv').config();


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp'; 

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


module.exports = mongoose;