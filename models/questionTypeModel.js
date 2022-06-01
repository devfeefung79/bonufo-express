const mongoose = require('mongoose');

const questionTypeSchema = new mongoose.Schema({
  label: {
    type: String,
    unique: true,
    required: true
  }
})

const questionTypeModel = mongoose.model('questionType', questionTypeSchema, 'question_types');

module.exports = { questionTypeModel, questionTypeSchema };