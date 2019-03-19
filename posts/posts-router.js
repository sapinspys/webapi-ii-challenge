// Important imports
const express = require('express');

// Custom imports
const db = require('../data/db.js');

// etc.
const router = express.Router();

// Endpoints: Handle all URLs beginning with /api/posts
router.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

router.get('/', (req, res) => {
  res.send('Hello from the posts router!')
})

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

router.delete('/:id', (req, res) => {
  res.send(req.params.bookId)
})

router.delete('/:id', (req, res) => {
  res.send(req.params.bookId)
})
module.exports = router;