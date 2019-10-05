const mongoose = require("mongoose");

const UserScema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("user", UserScema);
