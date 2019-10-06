const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const Track = require("../models/Track");

const router = express.Router();

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  console.log(req);
  const tracks = await Track.find({ userId: req.user._id });

  res.json(tracks);
});

router.use(requireAuth);

module.exports = router;
