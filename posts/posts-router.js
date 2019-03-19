// Important imports
const express = require("express");

// Custom imports
const db = require("../data/db.js");

// etc.
const router = express.Router();

// Endpoints: Handle all URLs beginning with /api/posts

// Creates a post using the information sent inside the `request body`.
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.contents) {
      res
        .status(400)
        .json({
          errorMessage: "Please provide title and contents for the post."
        });
    } else {
      const newUserId = await db.insert(req.body);
      res.status(200).json({ ...newUserId, ...req.body });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        error: "There was an error while saving the post to the database"
      });
  }
});

// Returns an array of all the post objects contained in the database.
router.get("/", async (req, res) => {
  try {
    const posts = await db.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "The posts information could not be retrieved." });
  }
});

// Returns the post object with the specified id.
router.get("/:id", async (req, res) => {
  try {
    const post = await db.findById(req.params.id); // returns post or empty array
    if (!post.length) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "The posts information could not be retrieved." });
  }
});

// Removes the post with the specified id and returns the **deleted post object**. You may need to make additional calls to the database in order to satisfy this requirement.
router.delete("/:id", (req, res) => {
  res.send(req.params.id);
});

// Updates the post with the specified `id` using data from the `request body`. Returns the modified document, **NOT the original**.
router.put("/:id", (req, res) => {
  res.send(req.params.id);
});
module.exports = router;

// - `find()`: calling find returns a promise that resolves to an array of all the `posts` contained in the database.
// - `findById()`: this method expects an `id` as it's only parameter and returns the post corresponding to the `id` provided or an empty array if no post with that `id` is found.
// - `insert()`: calling insert passing it a `post` object will add it to the database and return an object with the `id` of the inserted post. The object looks like this: `{ id: 123 }`.
// - `update()`: accepts two arguments, the first is the `id` of the post to update and the second is an object with the `changes` to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly.
// - `remove()`: the remove method accepts an `id` as it's first parameter and upon successfully deleting the post from the database it returns the number of records deleted.
