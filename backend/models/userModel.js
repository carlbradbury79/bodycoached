const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  workoutHistory: [
    {
      workoutDate: {
        type: Date,
      },
      workoutCompleted: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Workout',
      },
    },
  ],
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre('save', async function (next) {
  // If it isnt a passwod that has been changed
  if (!this.isModified('password')) {
    next();
  }

  // Hash the password before adding to db
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = User = mongoose.model('user', UserSchema);
