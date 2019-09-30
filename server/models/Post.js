const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create POSTS Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
