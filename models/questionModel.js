//import topicSchema from './topicModel/topicSchema';

const mongoose = require('mongoose');

const topic = require('./topicModel');
const questionType = require('./questionTypeModel');
const exam = require('./examModel.js');

const questionSchema = new mongoose.Schema({
  topic: {
    type: [String],
    unique: true,
  },
  questionType: [{
    type: [String],
    unique: true,
  }],
  relatedExam: [{
    type: [String],
    unique: true,
  }],
  question: {
    type: String,
    unique: true,
    required: true
  }
});

const questionModel = mongoose.model('question', questionSchema, 'questions');

module.exports = { questionModel, questionSchema };