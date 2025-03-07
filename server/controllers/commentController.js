const expressAsyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");

const getComments = expressAsyncHandler(async (req, res) => {
  const comments = await Comment.find({ car: req.params.id });

  if (!comments) {
    res.status(404);
    throw new Error("No Comments Found!");
  }

  res.status(200).json(comments);
});

const addComment = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add Comment Text");
  }

  const comment = await Comment.create({
    user: req.user._id,
    car: req.params.id,
    text: req.body.text,
    isAdmin: req.user.isAdmin,
  });

  if (!comment) {
    res.status(400);
    throw new Error("Comment no added");
  }

  res.status(201).json(comment);
});

module.exports = { getComments, addComment };
