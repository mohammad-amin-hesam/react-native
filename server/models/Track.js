const mongoose = require("mongoose");
const { Schema } = mongoose;

const pointSchema = new Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number
  }
});

const TrackSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    default: ""
  },
  locations: [pointSchema]
});

module.exports = Track = mongoose.model("Track", TrackSchema);
