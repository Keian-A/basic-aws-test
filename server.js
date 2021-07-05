'use strict';

require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to your basic server!')
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
