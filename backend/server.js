const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;

// Create Express app
const app = express();

// A simple route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Start the Express server
app.listen(5000, () => {
  console.log('Server listening on http://localhost:5000');
});