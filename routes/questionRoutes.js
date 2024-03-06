const { Router } = require('express');
const questionController = require('../controllers/questionController');
const jwt = require('../middleware/verifyJWT');

const router = Router();

/**
 * @swagger
 * /question/topics:
 *   get:
 *     summary: Retrieve a list of topic
 *     description: Retrieve a list of topic 
 *     tags:
 *       - Question
 *     security:
 *       - BearerAuth: []
 *     responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Topic'
 * 
 * components:
 *   schemas:
 *      Topic:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            format: uuid
 *            example: 62704465284c257466f0f8d9
 *          label:
 *            type: string
 *            example: Travel
*/
router.get('/topics', jwt.verifyJWT, questionController.getQuestionTopics);

/**
 * @swagger
 * /question/question-types:
 *   get:
 *     summary: Retrieve a list of question type
 *     description: Retrieve a list of question type
 *     tags:
 *       - Question
 *     security:
 *       - BearerAuth: []
 *     responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Question Type'
 * 
 * components:
 *   schemas:
 *      Question Type:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            format: uuid
 *            example: 6270445b284c257466f0f8ce
 *          label:
 *            type: string
 *            example: Preference
*/
router.get('/question-types', jwt.verifyJWT, questionController.getQuestionTypes);

/**
 * @swagger
 * /question/exams:
 *   get:
 *     summary: Retrieve a list of exam
 *     description: Retrieve a list of exam
 *     tags:
 *       - Question
 *     security:
 *       - BearerAuth: []
 *     responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Exam'
 * 
 * components:
 *   schemas:
 *      Exam:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            format: uuid
 *            example: 62704496284c257466f0f8fe
 *          label:
 *            type: string
 *            example: TOEFL PBT
*/
router.get('/exams', jwt.verifyJWT, questionController.getQuestionExams);

/**
 * @swagger
 * /question/all:
 *   get:
 *     summary: Retrieve all questions
 *     description: Retrieve all questions
 *     tags:
 *       - Question
 *     security:
 *       - BearerAuth: []
 *     responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Question'
 * 
 * components:
 *   schemas:
 *      Question:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            format: uuid
 *            example: 62704489284c257466f0f8f1
 *          topic:
 *            type: array
 *            items:
 *                $ref: '#/components/schemas/Topic'
 *          questionType:
 *            type: array
 *            items:
 *                $ref: '#/components/schemas/Question Type'
 *          relatedExam:
 *            type: array
 *            items:
 *                $ref: '#/components/schemas/Exam'
 *          question:
 *            type: string
 *            example: Write about the following topic
*/
router.get('/all', jwt.verifyJWT, questionController.getQuestions);

/**
 * @swagger
 * /question/search:
 *   post:
 *     summary: Retrieve a list of questions with criteria
 *     description: Retrieve a list of questions with criteria
 *     tags:
 *       - Question
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       description: A JSON object that obtains keyword, topics, question types and related exams.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Question Search'
 *     responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Question'
 *      '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 * 
 * components:
 *   schemas:
 *      Question Search:
 *        type: object
 *        properties:
 *          keyword:
 *            type: string
 *            example: Write
 *          topic:
 *            type: array
 *            items:
 *              type: string
 *            example: ['Travel', 'Language']
 *          questionType:
 *            type: array
 *            items:
 *              type: string
 *            example: ['Preference']
 *          exam:
 *            type: array
 *            items:
 *              type: string
 *            example: ['CELPIP']
*/
router.post('/search', jwt.verifyJWT, questionController.searchQuestions);

/**
 * @swagger
 * /question/{id}:
 *   get:
 *     summary: Retrieve a question with id
 *     description: Retrieve a question with id
 *     tags:
 *       - Question
 *     security:
 *     - BearerAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *     responses:
 *        '200':
 *          description: Successful response
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Question'
 *        '404':
 *          description: Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
*/
router.get('/:id', jwt.verifyJWT, questionController.getQuestionById);

/**
 * @swagger
 * /question/saved-questions/{userId}:
 *   get:
 *     summary: Retrieve a list of saved questions with user id
 *     description: Retrieve a list of saved questions with user id
 *     tags:
 *       - Question
 *     security:
 *     - BearerAuth: []
 *     parameters:
 *     - in: path
 *       name: userId
 *       required: true
 *       schema:
 *         type: string
 *     responses:
 *        '200':
 *          description: Successful response
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Question'
*/
router.get('/saved-questions/:userId', jwt.verifyJWT, questionController.getSavedQuestions);

/**
 * @swagger
 * /question/save:
 *   post:
 *     summary: Save a question
 *     description: Save a question
 *     tags:
 *       - Question
 *     security:
 *     - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Save Question'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Saved Question'
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *
 * components:
 *   schemas:
 *      Save Question:
 *        type: object
 *        properties:
 *          userId:
 *            type: string
 *            format: uuid
 *            example: 62959b87f7781d5bb0abdc9f
 *          questionId:
 *            type: string
 *            format: uuid
 *            example: 62704489284c257466f0f8f1
 *          question:
 *            type: string
 *            example: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.
 * 
 *      Saved Question:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            format: uuid
 *            example: 65e765bfe4ec294fa8220d72
 *          userId:
 *            type: string
 *            format: uuid
 *            example: 62959b87f7781d5bb0abdc9f
 *          questionId:
 *            type: string
 *            format: uuid
 *            example: 62704489284c257466f0f8f1
 *          question:
 *            type: string
 *            example: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.
 *          __v:
 *            type: number
 *            example: 0
*/
router.post('/save', jwt.verifyJWT, questionController.addSavedQuestion);

/**
 * @swagger
 * /question/unsave/{userId}/{questionId}:
 *   delete:
 *     summary: Unsave a question
 *     description: Unsave a question
 *     tags:
 *       - Question
 *     security:
 *     - BearerAuth: []
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
 *     responses:
 *       '200':
 *          description: Successful response
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Saved Question'
*/
router.delete('/unsave/:userId/:questionId', jwt.verifyJWT, questionController.deleteSavedQuestion);

module.exports = router;