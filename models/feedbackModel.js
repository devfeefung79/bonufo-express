const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  sequence: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  supplementaryText: {
    type: String
  },
  weighting: {
    type: Number,
    required: true
  },
  fullScore: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  }
})

const feedbackSchema = new mongoose.Schema({
  essayId: {
    type: String,
    required: true
  },
  essay: {
    type: String,
    required: true
  },
  submitterId: {
    type: String,
    required: true,
  },
  submitterName: {
    type: String,
    required: true,
  },
  submittedDateTime: {
    type: Date,
    required: true,
  },
  sections: [sectionSchema],
  overallComment: {
    type: String,
  },
  totalScore: {
    type: Number,
    required: true
  }
})

const feedbackModel = mongoose.model('feedback', feedbackSchema, 'feedbacks');

module.exports = { feedbackModel, feedbackSchema };