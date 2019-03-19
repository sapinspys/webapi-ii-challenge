// The `db.js` publishes the following methods:

// - `find()`: calling find returns a promise that resolves to an array of all the `posts` contained in the database.
// - `findById()`: this method expects an `id` as it's only parameter and returns the post corresponding to the `id` provided or an empty array if no post with that `id` is found.
// - `insert()`: calling insert passing it a `post` object will add it to the database and return an object with the `id` of the inserted post. The object looks like this: `{ id: 123 }`.
// - `update()`: accepts two arguments, the first is the `id` of the post to update and the second is an object with the `changes` to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly.
// - `remove()`: the remove method accepts an `id` as it's first parameter and upon successfully deleting the post from the database it returns the number of records deleted.
const express = require('express');

const postsRouter = require('./posts/posts-router')

const server = express();

// Endpoints:
server.get('/', (req, res) => {
  res.send('Hello from the main directory!')
})

server.use('/api/posts', postsRouter)

module.exports = server;
