const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  label: {
    type: String,
    unique: true,
    required: true
  }
})

const examModel = mongoose.model('exam', examSchema, 'exams');

module.exports = { examModel, examSchema };