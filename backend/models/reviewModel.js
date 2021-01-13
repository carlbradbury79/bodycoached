const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  reviewDate: {
    type: Date,
  },

  rating: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
  },
  exercises: [],
  type: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

module.exports = Review = mongoose.model('review', ReviewSchema);
