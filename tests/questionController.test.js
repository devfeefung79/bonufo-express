const QuestionController = require('../controllers/questionController');
const httpMocks = require('node-mocks-http');
// const Question = require('../models/questionModel');

jest.mock('../models/questionModel');

let req, res;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
})

describe('QuestionController.getQuestions', () => {
  it('should have a getQuestions function', () => {
    expect(typeof QuestionController.getQuestions).toBe('function');
  })
})

describe('QuestionController.searchQuestions', () => {
  it('should have a searchQuestions function', () => {
    expect(typeof QuestionController.searchQuestions).toBe('function');
  })
})

describe('QuestionController.getQuestionById', () => {
  it('should have a getQuestionById function', () => {
    expect(typeof QuestionController.getQuestionById).toBe('function');
  })
})

describe('QuestionController.getQuestionTopics', () => {
  it('should have a getQuestionTopics function', () => {
    expect(typeof QuestionController.getQuestionTopics).toBe('function');
  })
})

describe('QuestionController.getQuestionTypes', () => {
  it('should have a getQuestionTypes function', () => {
    expect(typeof QuestionController.getQuestionTypes).toBe('function');
  })
})

describe('QuestionController.getQuestionExams', () => {
  it('should have a getQuestionExams function', () => {
    expect(typeof QuestionController.getQuestionExams).toBe('function');
  })
})

describe('QuestionController.getSavedQuestions', () => {
  it('should have a getSavedQuestions function', () => {
    expect(typeof QuestionController.getSavedQuestions).toBe('function');
  })
})

describe('QuestionController.addSavedQuestion', () => {
  it('should have a addSavedQuestion function', () => {
    expect(typeof QuestionController.addSavedQuestion).toBe('function');
  })
})

describe('QuestionController.deleteSavedQuestion', () => {
  it('should have a deleteSavedQuestion function', () => {
    expect(typeof QuestionController.deleteSavedQuestion).toBe('function');
  })
})