const UserController = require('../controllers/userController');
const User = require('../models/userModel');
const httpMocks = require('node-mocks-http');
const mockUserData = require('./mock-data/users.json');

jest.mock('../models/userModel');
User.userModel.findById.mockResolvedValue(mockUserData);

let req, res;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
})

describe('UserController.signup', () => {
  it('should have a signup function', () => {
    expect(typeof UserController.signup).toBe('function');
  })
})

describe('UserController.login', () => {
  it('should have a login function', () => {
    expect(typeof UserController.login).toBe('function');
  })
})

describe('UserController.getAccessToken', () => {
  it('should have a getAccessToken function', () => {
    expect(typeof UserController.getAccessToken).toBe('function');
  })
})

describe('UserController.logout', () => {
  it('should have a logout function', () => {
    expect(typeof UserController.logout).toBe('function');
  })
})

describe('UserController.getUserById', () => {
  beforeEach(() => {
    User.userModel.findById.mockClear();
  });

  it('should have a getUserById function', () => {
    expect(typeof UserController.getUserById).toBe('function');
  })

  it('should call UserController.find({})', async () => {
    const req = { params: { id: '1' } };
    await UserController.getUserById(req, res);
    expect(User.userModel.findById).toHaveBeenCalledWith(req.params.id);
  })

  it('should return response with status 200 and data if a user is found', async () => {
    User.userModel.findById.mockResolvedValue(mockUserData[0]);

    const req = { params: { id: '1' } };
    await UserController.getUserById(req, res);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getData()).toStrictEqual(mockUserData[0])
  })

  it('should return response with status 404 and data if a user is not found', async () => {
    User.userModel.findById.mockResolvedValue(null);

    const req = { params: { id: '4' } };
    await UserController.getUserById(req, res);
    expect(res.statusCode).toBe(404);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getData()).toEqual({"message": "Not found question with id 4"})
  })
})
