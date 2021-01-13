const mongoose = require('mongoose');
const Review = require('./reviewModel');

const workoutSchema = new mongoose.Schema({
  youtubeId: {
    type: String,
    required: true,
  },
  url: {
    type: url,
    required: true,
  },
  uploaded: {
    type: Date,
  },
  reviews: [Review],
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);
