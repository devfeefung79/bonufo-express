const { Router } = require('express');
const questionController = require('../controllers/questionController');
const jwt = require('../middleware/verifyJWT');

const router = Router();

/**
 * @swagger
 * /question/topics:
 *   get:
 *     summary: Retrieve a list of topic objects
 *     description: Retrieve a list of topic objects
*/
router.get('/topics', jwt.verifyJWT, questionController.getQuestionTopics);

/**
 * @swagger
 * /question/question-types:
 *   get:
 *     summary: Retrieve a list of question type objects
 *     description: Retrieve a list of question type objects
*/
router.get('/question-types', jwt.verifyJWT, questionController.getQuestionTypes);

/**
 * @swagger
 * /question/exams:
 *   get:
 *     summary: Retrieve a list of exam objects
 *     description: Retrieve a list of exam objects
*/
router.get('/exams', jwt.verifyJWT, questionController.getQuestionExams);

/**
 * @swagger
 * /question/all:
 *   get:
 *     summary: Retrieve all questions
 *     description: Retrieve all questions
*/
router.get('/all', jwt.verifyJWT, questionController.getQuestions);

/**
 * @swagger
 * /question/search:
 *   post:
 *     summary: Retrieve a list of questions with criteria
 *     description: Retrieve a list of questions with criteria
*/
router.post('/search', jwt.verifyJWT, questionController.searchQuestions);

/**
 * @swagger
 * /question/{id}:
 *   get:
 *     summary: Retrieve a question with id
 *     description: Retrieve a question with id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/:id', jwt.verifyJWT, questionController.getQuestionById);

/**
 * @swagger
 * /question/saved-questions/{userId}:
 *   get:
 *     summary: Retrieve a list of saved questions with user id
 *     description: Retrieve a list of saved questions with user id
 *     parameters:
 *     - in: path
 *       name: userId
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/saved-questions/:userId', jwt.verifyJWT, questionController.getSavedQuestions);

/**
 * @swagger
 * /question/save:
 *   post:
 *     summary: Save a question
 *     description: Save a question
*/
router.post('/save', jwt.verifyJWT, questionController.addSavedQuestion);

/**
 * @swagger
 * /question/unsave/{userId}/{questionId}:
 *   delete:
 *     summary: Unsave a question
 *     description: Unsave a question
 *     parameters:
 *     - in: path
 *       name: userId
 *       required: true
 *       schema:
 *         type: string
 *     - in: path
 *       name: questionId
 *       required: true
 *       schema:
 *         type: string
*/
router.delete('/unsave/:userId/:questionId', jwt.verifyJWT, questionController.deleteSavedQuestion);

module.exports = router;