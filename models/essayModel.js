const mongoose = require('mongoose');

const essaySchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  submitterId: {
    type: String,
    required: true,
  },
  submitterName: {
    type:String, 
    required: true,
  },
  submittedDateTime: {
    type: Date,
    required: true,
  },
  markingSchemeId: {
    type: String,
    required: true,
  },
  markingSchemeName: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  wordCount: {
    type: Number,
    required: true
  },
  attachment: {
    type: Buffer,
  },
  numberOfFeedbacks: {
    type: Number,
    required: true,
  },
  averageScore: {
    type: Number,
  }
})

const essayModel = mongoose.model('essay', essaySchema, 'essays');

module.exports = { essayModel, essaySchema };