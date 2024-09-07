const FeedbackController = require('../controllers/feedbackController');
const httpMocks = require('node-mocks-http');

jest.mock('../models/feedbackModel');

let req, res;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
})

describe('FeedbackController.addFeedback', () => {
  it('should have a addFeedback function', () => {
    expect(typeof FeedbackController.addFeedback).toBe('function');
  })
})

describe('FeedbackController.getFeedbackById', () => {
  it('should have a getFeedbackById function', () => {
    expect(typeof FeedbackController.getFeedbackById).toBe('function');
  })
})

describe('FeedbackController.getFeedbackByEssayId', () => {
  it('should have a getFeedbackByEssayId function', () => {
    expect(typeof FeedbackController.getFeedbackByEssayId).toBe('function');
  })
})

describe('FeedbackController.getFeedbackByUserId', () => {
  it('should have a getFeedbackByUserId function', () => {
    expect(typeof FeedbackController.getFeedbackByUserId).toBe('function');
  })
})
