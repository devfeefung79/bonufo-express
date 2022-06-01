const Essay = require("../models/essayModel");

let calAverageScore = (prevScore, prevCount, newScore) => {
  let totalScore = prevScore*prevCount;
  totalScore =+ newScore;
  return totalScore / (prevCount+1);
}

let updateEssayScore = async (essayId, newGivenScore) => {
  let targetEssay;
  await Essay.essayModel.findById(essayId)
    .then(foundEssay => {
      targetEssay = foundEssay;
    })

  if (targetEssay) {

    let newTargetEssay = targetEssay;
    if (targetEssay.numberOfFeedbacks === 0) {
      newTargetEssay.numberOfFeedbacks = 1;
      newTargetEssay.averageScore = newGivenScore;
    }
    else {
      newTargetEssay.numberOfFeedbacks = targetEssay.numberOfFeedbacks + 1;
      newTargetEssay.averageScore = calAverageScore(targetEssay.averageScore, targetEssay.numberOfFeedbacks, newGivenScore);  
    }

    Essay.essayModel.findByIdAndUpdate(essayId, newTargetEssay, { useFindAndModify: false })
    .then(updatedEssay => {
      console.log(updatedEssay);
    })
    
  }
}

module.exports = { updateEssayScore };