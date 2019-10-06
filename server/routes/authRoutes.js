const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keys = require("../config/keys");

const User = require("../models/User");

const router = express.Router();

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      user.password = hash;
      user
        .save()
        .then(user => {
          jwt.sign(
            user,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({ token: "Bearer " + token });
            }
          );
        })
        .catch(err => res.status(422).send(err.message));
    });
  });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ err: "invalid password or email" });
  }

  const user = await User.findOne({ email });
  const { email: _email, password: _password, _id } = user;

  const payload = { email: _email, password: _password, _id };

  if (!user) {
    return res.status(404).send({ error: "Email not found" });
  }

  try {
    await bcrypt.compare(password, user.password);
    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
      if (err) console.log(err);
      res.json({ token: "Bearer " + token });
    });
  } catch (err) {
    return res.status(422).send({ error: "invalid password or email" });
  }
});

module.exports = router;
