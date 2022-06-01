const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  label: {
    type: String,
    unique: true,
    required: true
  }
})

const topicModel = mongoose.model('topic', topicSchema, 'topics');

module.exports = { topicModel, topicSchema };