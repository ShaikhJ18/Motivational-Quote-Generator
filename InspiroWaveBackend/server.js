// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the InspiroWave API!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
