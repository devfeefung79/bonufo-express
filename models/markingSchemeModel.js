const mongoose = require('mongoose');
const exam = require('./examModel.js');

const sectionSchema = new mongoose.Schema({
  sequence: {
    type: Number,
    unique: true,
    required: true
  },
  description: {
    type: String
  },
  supplementaryText: {
    type: String
  },
  weighting: {
    type: Number,
  },
  fullScore: {
    type: Number,
    required: true
  }
})

const markingSchemeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  minWords: {
    type: Number,
  },
  maxWords: {
    type: Number,
  },
  relatedExam: [exam.examSchema],
  sections: [sectionSchema],
  calculationMode: {
    type: String,
  },
  totalFullScore: {
    type: Number,
    required: true
  }
})

const markingSchemeModel = mongoose.model('markingScheme', markingSchemeSchema, 'marking_schemes');

module.exports = { markingSchemeModel, markingSchemeSchema };