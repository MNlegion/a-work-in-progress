const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


const app = express();

// import routes
app.use('/api/items', require('./routes/itemRoutes'));

app.listen(5000, () => {
  console.log(`Server listening on ${port}`);
});