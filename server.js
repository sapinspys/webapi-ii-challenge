const db = require ('./data/db');
const express = require('express');

const server = express();

// Endpoints:
server.get('/', (req, res) => {
  res.send('Hello world!')
})

module.exports = server;
