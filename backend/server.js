const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

// connect to db
connectDB();

// create express app
const app = express();

// middleware - allows us to parse json and use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// import routes
app.use('/api/items', require('./routes/itemRoutes'));

// error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});