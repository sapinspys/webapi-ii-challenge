const express = require('express');

const postsRouter = require('./posts/posts-router')

const cors = require('cors');

const server = express();
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send('Hello from the WEB API II Challenge server!')
})

server.use('/api/posts', postsRouter)

module.exports = server;
