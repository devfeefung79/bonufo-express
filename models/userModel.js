const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 6
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['Learner', 'Tutor']
  },
  refreshToken: {
    type: String
  },
  picture: {
    type: Buffer,
  },
  summary: {
    type: String,
  },
})

const userModel = mongoose.model('user', userSchema, 'users');

module.exports = { userModel, userSchema };