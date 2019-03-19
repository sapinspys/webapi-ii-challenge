// Important imports
const express = require('express');

// Custom imports
const db = require('../data/db.js');

// etc.
const router = express.Router();

// Handles URLs beginning with /api/posts
router.get('/', (req, res) => {
  res.send('Hello from the posts router!')
})

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

module.exports = router;