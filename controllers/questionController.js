const Exam = require("../models/examModel");
const QuestionType = require("../models/questionTypeModel");
const Topic = require("../models/topicModel");
const Question = require("../models/questionModel");
const SavedQuestion = require("../models/savedQuestionModel");

//Not Applicable
module.exports.addQuestion = (req, res) => {
  if (!req.body.question) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const newQuestion = new Question({
    topic: req.body.topic,
    questionType: req.body.questionType,
    relatedExam: req.body.relatedExam,
    question: req.body.question,
  });
  newQuestion
    .save(newQuestion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
}

module.exports.getQuestions = (req, res) => {
  Question.questionModel.find({}).lean().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving questions."
      })
    })
}

module.exports.searchQuestions = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  } else {
    let requestBody = req.body;
    let criteria = {};
    if (requestBody.keyword) {
      criteria.question = { $regex: `.*${requestBody.keyword}.*`, $options: "i"  };
    }
    if (requestBody.topic) {
      criteria.topic = { $in: requestBody.topic };
    }
    if (requestBody.questionType) {
      criteria.questionType = { $in: requestBody.questionType };
    }
    if (requestBody.exam) {
      criteria.relatedExam = { $in: requestBody.exam };
    }
    Question.questionModel.find(criteria).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving questions."
        })
      })
  }
}

module.exports.getQuestionById = (req, res) => {
  const questionId = req.params.id;
  Question.questionModel.findById(questionId).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Not found question with id ${questionId}`
      })
    }
    else {
      res.send(data)
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving question with id ${questionId}`
    })
  })
}

module.exports.getQuestionTopics = (req, res) => {
  Topic.topicModel.find({}).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving question topics."
      })
    })
}

module.exports.getQuestionTypes = (req, res) => {
  QuestionType.questionTypeModel.find({}).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving question types."
      })
    })
}

module.exports.getQuestionExams = (req, res) => {
  Exam.examModel.find({}).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving question exams."
      })
    })
}

module.exports.getSavedQuestions = (req, res) => {
  SavedQuestion.savedQuestionModel.find({userId: req.params.userId}).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving question exams."
      })
    })
}

module.exports.addSavedQuestion = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const newSavedQuestion = new SavedQuestion.savedQuestionModel({
    userId: req.body.userId,
    questionId: req.body.questionId,
    question: req.body.question
  });
  newSavedQuestion.save()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message
    });
  });
}

module.exports.deleteSavedQuestion = (req, res) => {
  SavedQuestion.savedQuestionModel.findOneAndDelete({
    userId: req.params.userId,
    questionId: req.params.questionId
  }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving question topics."
      })
    })
}