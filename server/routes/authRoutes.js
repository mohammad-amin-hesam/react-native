const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });

  user
    .save()
    .then(user => {
      const token = jwt.JsonWebTokenError(
        { userId: user._id },
        "MY_SECRET_KEY"
      );
      res.json({ token });
    })
    .catch(err => res.status(422).send(err.message));
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || password) {
    return res.status(422).send({ err: "invalid password or email" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send({ error: "Email not found" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.json({ token });
  } catch (err) {
    return res.status(422).send({ error: "invalid password or email" });
  }
});

module.exports = router;
