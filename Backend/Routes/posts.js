const express = require("express");
const router = express.Router();

const Post = require("../Models/Post");

const verifyToken = require("../verifyToken");

// Create
router.post("/create", verifyToken, async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.sendStatus(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    //await Comment.deleteMany({ postId: req.params.id });
    res.status(200).json("Post has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET POST DETAILS
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET POSTS
router.get("/", async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const searchFilter = {
      title: { $regex: query.search, $options: "i" },
    };
    const posts = await Post.find(query.search ? searchFilter : null);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USER POSTS :userID
router.get("/user/:userId", async (req, res) => {
  try {
    const userPost = await Post.find({ userId: req.params.userId });
    res.status(200).json(userPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// EXPORT
module.exports = router;
