const Essay = require("../models/essayModel");
const MarkingScheme = require("../models/markingSchemeModel");

module.exports.addEssay = (req, res) => {
  if (!req.body.content) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const newEssay = new Essay.essayModel({
    questionId: req.body.questionId,
    question: req.body.question,
    submitterId: req.body.submitterId,
    submitterName: req.body.submitterName,
    submittedDateTime: new Date(),
    state: req.body.state,
    markingSchemeId: req.body.markingSchemeId,
    markingSchemeName: req.body.markingSchemeName,
    content: req.body.content,
    numberOfFeedbacks: 0,
    wordCount: req.body.wordCount,
  });
  newEssay
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Essay."
      });
    });
}

module.exports.getEssayById = (req, res) => {
  const essayId = req.params.id;
  Essay.essayModel.findById(essayId).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Not found essay with id ${essayId}`
      })
    }
    else {
      res.send(data)
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving essay with id ${essayId}`
    })
  })
}

module.exports.getEssayByUserId = (req, res) => {
  const id = req.params.id;
  Essay.essayModel.find({
    submitterId: id, 
    state: "submission"
  }).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Not found essay with user id ${id}`
      })
    }
    else {
      res.send(data)
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving essay with user id ${essayId}`
    })
  })
}

module.exports.getEssayByQuestionId = (req, res) => {
  const id = req.params.id;
  Essay.essayModel.find({
    questionId: id, 
    state: "submission"
  }).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Not found essay with questionId ${id}`
      })
    }
    else {
      res.send(data)
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving essay with questionId ${essayId}`
    })
  })
}

module.exports.updateEssay = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const essayId = req.params.id;

  Essay.essayModel.findByIdAndUpdate(essayId, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update essay with id ${essayId}.`
        });
      } else res.send({ message: `Essay ${essayId} was updated successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating essay with id ${essayId}`
      });
    });
}

module.exports.deleteEssay = (req, res) => {
  const essayId = req.params.id;

  Essay.essayModel.findByIdAndRemove(essayId)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete essay with id ${essayId}.`
        });
      } else {
        res.send({
          message: `Essay ${essayId} was deleted successfully!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete essay with id ${essayId}`
      });
    });
}

module.exports.getMarkingSchemes = (req, res) => {
  MarkingScheme.markingSchemeModel.find({}).lean()
  .then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving marking scheme."
      })
    })
}

module.exports.getMarkingSchemeById = (req, res) => {
  const markingSchemeId = req.params.id;
  MarkingScheme.markingSchemeModel.findById(markingSchemeId).lean().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving marking scheme."
      })
    })
}

//to be completed
module.exports.addEssayAttachment = (req, res) => {
  res.send('add essay attachment');
}

//to be completed
module.exports.getEssayAttachment = (req, res) => {
  res.send('get essay attachment');
}

//to be completed
module.exports.delEssayAttachment = (req, res) => {
  res.send('delete essay attachment');
}