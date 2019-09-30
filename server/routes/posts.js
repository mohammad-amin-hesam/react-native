const express = require("express");
const router = express.Router();

// Post Modal
const Post = require("../models/Post");

router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(() =>
      res.status(404).json({ nopostsfound: "there is no posts amin :)" })
    );
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id).then(post => {
    if (!post) {
      return res.status(404).json({ nopostfound: "your post doesn't exists" });
    }
    res.json(post);
  });
});

router.post("/", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content
  });

  newPost
    .save()
    .then(post => res.json(post))
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
  Post.findById(req.params.id).then(post => {
    if (!post) {
      return res.status(404).json({ postnotfound: "Not post found" });
    }

    post
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err => {
        res.status(404).json({ postnotfound: "Not post found" });
      });
  });
});

router.put("/:id", async (req, res) => {
  try {
    const item = await Post.findById(req.params.id);

    const newItem = {
      title: req.body.title,
      content: req.body.content
    };

    !item
      ? res.status(404).json({ notFound: "post not found !!!" })
      : await Post.updateOne(item, newItem).then(post => res.json(newItem));
  } catch (err) {
    res.status(404).json({ msg: "post not found!!!" });
  }
});

module.exports = router;
