const Feedback = require("../models/feedbackModel");
const ScoreCal = require("../services/scoreCalService");

module.exports.addFeedback = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const newFeedback = new Feedback.feedbackModel({
    essayId: req.body.essayId,
    essay: req.body.essay,
    submitterId: req.body.submitterId,
    submitterName: req.body.submitterName,
    submittedDateTime: new Date(),
    sections: req.body.sections,
    overallComment: req.body.overallComment,
    totalScore: req.body.totalScore,
  });

  newFeedback
    .save()
    .then(data => {
      if (data) ScoreCal.updateEssayScore(req.body.essayId, req.body.totalScore);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while inserting the feedback."
      });
    });
}

module.exports.getFeedbackById = (req, res) => {
  const feedbackId = req.params.id;
  Feedback.feedbackModel.findById(feedbackId)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Not found feedback with id ${feedbackId}`
      })
    }
    else {
      res.send(data)
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving feedback with id ${feedbackId}`
    })
  })
}

module.exports.getFeedbackByEssayId = (req, res) => {
  const essayId = req.params.id;
  Feedback.feedbackModel.find({
    essayId: essayId, 
  }).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Not found feedback with essay id ${essayId}`
      })
    }
    else {
      res.send(data)
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving feedback with essay id ${essayId}`
    })
  })
}

module.exports.getFeedbackByUserId = (req, res) => {
  const userId = req.params.id;
  Feedback.feedbackModel.find({
    submitterId: userId, 
  }).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Not found feedback with user id ${userId}`
      })
    }
    else {
      res.send(data)
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving feedback with user id ${userId}`
    })
  })
}

module.exports.updateFeedback = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const feedbackId = req.params.id;

  Feedback.findByIdAndUpdate(feedbackId, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update feedback with id ${feedbackId}.`
        });
      } else res.send({ message: `Feedback ${feedbackId} was updated successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating feedback with id ${feedbackId}`
      });
    });
}

module.exports.deleteFeedback = (req, res) => {
  const feedbackId = req.params.id;

  Feedback.findByIdAndRemove(feedbackId)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete feedback with id ${feedbackId}.`
        });
      } else {
        res.send({
          message: `Feedback ${feedbackId} was deleted successfully!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete feedback with id ${feedbackId}`
      });
    });
}