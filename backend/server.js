const express = require('express');
const dotenv = require('dotenv');
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

// Create Express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
app.use('/api/items', require('./routes/itemRoutes'));

// Start the Express server
app.listen(5000, () => {
  console.log('Server listening on http://localhost:5000');
});