const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const Track = require("../models/Track");

const router = express.Router();

router.use(requireAuth);
