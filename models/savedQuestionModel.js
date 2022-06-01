const mongoose = require('mongoose');

const savedQuestionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  }, 
  questionId: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
})

const savedQuestionModel = mongoose.model('savedQuestion', savedQuestionSchema, 'saved_questions');

module.exports = { savedQuestionModel, savedQuestionSchema };