const EssayController = require('../controllers/essayController');
const httpMocks = require('node-mocks-http');

jest.mock('../models/essayModel');

let req, res;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
})

describe('EssayController.addEssay', () => {
  it('should have a addEssay function', () => {
    expect(typeof EssayController.addEssay).toBe('function');
  })
})

describe('EssayController.getEssayById', () => {
  it('should have a getEssayById function', () => {
    expect(typeof EssayController.getEssayById).toBe('function');
  })
})

describe('EssayController.getEssayByUserId', () => {
  it('should have a getEssayByUserId function', () => {
    expect(typeof EssayController.getEssayByUserId).toBe('function');
  })
})

describe('EssayController.getEssayByQuestionId', () => {
  it('should have a getEssayByQuestionId function', () => {
    expect(typeof EssayController.getEssayByQuestionId).toBe('function');
  })
})

describe('EssayController.getEssayByQuestionId', () => {
  it('should have a getEssayByQuestionId function', () => {
    expect(typeof EssayController.getEssayByQuestionId).toBe('function');
  })
})

describe('EssayController.getMarkingSchemes', () => {
  it('should have a getMarkingSchemes function', () => {
    expect(typeof EssayController.getMarkingSchemes).toBe('function');
  })
})

describe('EssayController.getMarkingSchemeById', () => {
  it('should have a getMarkingSchemeById function', () => {
    expect(typeof EssayController.getMarkingSchemeById).toBe('function');
  })
})