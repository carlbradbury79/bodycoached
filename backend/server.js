const express = require('express');
require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

connectDB();

const app = express();

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
