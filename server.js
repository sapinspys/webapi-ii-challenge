const express = require('express');

const postsRouter = require('./posts/posts-router')

const cors = require('cors');

const server = express();

// BUILT-IN MIDDLEWARE
server.use(express.json());

// CUSTOM MIDDLEWARE 
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );

  next();
}

server.use(logger);

// GLOBAL MIDDLEWARE
function atGate(req, res, next) {
  console.log(`At the gate, about to be eaten`);

  next();
}

server.use(atGate);

// AUTHENTICATION MIDDLEWARE
function auth(req, res, next) {
  if (req.url === '/mellon') {
    next();
  } else {
    res.send('You shall not pass!');
  }
}

server.use(auth)

// THIRD PARTY MIDDLEWARE
server.use(cors());

server.get('/', (req, res) => {
  res.send('Hello from the WEB API II Challenge server!')
})

// LOCAL MIDDLEWARE
server.get('/mellon', auth, (req, res) => {
  console.log('Gate opening...');
  console.log('Inside and safe');
  res.send('Welcome Traveler!');
});

// ROUTE HANDLERS ARE ALSO MIDDLEWARE
server.use('/api/posts', postsRouter)

// CUSTOM MIDDLEWARE! 
server.use(function(req, res) {
  res.status(404).send("Ain't nobody got time for that!");
});

module.exports = server;
