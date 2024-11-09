require('dotenv').config();  // Ensure the dotenv file is loaded

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
