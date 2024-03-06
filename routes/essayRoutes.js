const { Router } = require('express');
const essayController = require('../controllers/essayController');
const jwt = require('../middleware/verifyJWT');

const router = Router();

/**
 * @swagger
 * /essay/add:
 *   post:
 *     summary: Create a new essay object with request
 *     description: Create a new essay object with request
 *     tags:
 *       - Essay
 *     security:
 *      - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionId:
 *                 type: string
 *                 format: uuid
 *                 example: 628b07acfca14c127cc5e272
 *               question:
 *                 type: string
 *                 example: Write about the following topic Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.
 *               submitterId:
 *                 type: string
 *                 format: uuid
 *                 example: 62732d6d1403354a60762ebc
 *               submitterName:
 *                 type: string
 *                 example: feena912
 *               state:
 *                 type: string
 *                 example: submission
 *               markingSchemeId:
 *                 type: string
 *                 format: uuid
 *                 example: 6289a2ecfca14c127cc5e250
 *               markingSchemeName:
 *                 type: string
 *                 example: IELTS Academic Task 2
 *               content:
 *                 type: string
 *                 example: This is a sample essay content
 *               wordCount:
 *                 type: number
 *                 example: 300
 *     responses:
 *       '200':
 *          description: Successful Response
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Essay'
 *       '400':
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '404':
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 * 
*/
router.post('/add', jwt.verifyJWT, essayController.addEssay);

/**
 * @swagger
 * /essay/{id}:
 *   get:
 *     summary: Retrieve an essay object by id
 *     description: Retrieve an essay object by id
 *     tags:
 *       - Essay
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *     responses:
 *       '200':
 *          description: Successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Essay'
 *       '404':
 *          description: Not found
 *          content:
 *            application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 * 
 * components:
 *   schemas:
 *      Essay:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            format: uuid
 *            example: 628bf079242f7147acd2ebf4
 *          questionId:
 *            type: string
 *            format: uuid
 *            example: 628b07acfca14c127cc5e272
 *          question:
 *            type: string
 *            example: Read the following information...
 *          submitterId:
 *            type: string
 *            format: uuid
 *            example: 6271ecc975b32c3874cdab89
 *          submitterName:
 *            type: string
 *            example: feenafung72
 *          submittedDateTime:
 *            type: string
 *            example: 2022-05-23T20:37:13.034Z
 *          state:
 *            type: string
 *            example: submission
 *          markingSchemeId:
 *            type: string
 *            format: uuid
 *            example: 6289a2ecfca14c127cc5e251
 *          markingSchemeName:
 *            type: string
 *            example: CELPIP
 *          content:
 *            type: string
 *            format: uuid
 *            example: Vacation time is meant for relaxing. The last thing that I want to think about when I am on vacation is work stuffs or what I should do to improve myself in my job. It is true that it would be nice to stay at a beachside hotel for 4 days, but my concern is, how much of this hotel or time will we get to enjoy? The training could take us the entire day and by the time we get back to our hotel we will be too tired to do anything else to enjoy ourselves. This will mean that we basically won't be having any real
 *          numberOfFeedbacks:
 *            type: number
 *            example: 1
 *          wordCount:
 *            type: number
 *            example: 203
 *          __v:
 *            type: number
 *            example: 0
 *          averageScore:
 *            type: number
 *            example: 5
*/
router.get('/:id', jwt.verifyJWT, essayController.getEssayById);

/**
 * @swagger
 * /essay/by-user/{id}:
 *   get:
 *     summary: Retrieve a list of essay by user id
 *     description: Retrieve a list of essay by user id
 *     tags:
 *       - Essay
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *     responses:
 *       '200':
 *          description: Successful
 *          content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Essay'
 *       '404':
 *          description: Not found
 *          content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
*/
router.get('/by-user/:id', jwt.verifyJWT, essayController.getEssayByUserId);

/**
 * @swagger
 * /essay/by-question/{id}:
 *   get:
 *     summary: Retrieve a list of essay by question id
 *     description: Retrieve a list of essay by question id
 *     tags:
 *       - Essay
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *     responses:
 *       '200':
 *         description: Successful
 *         content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Essay'
 *       '404':
 *          description: Not found
 *          content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
*/
router.get('/by-question/:id', jwt.verifyJWT, essayController.getEssayByQuestionId);

/**
 * @swagger
 * /essay/marking-scheme/all:
 *   get:
 *     summary: Retrieve all marking schemes available
 *     description: Retrieve all marking schemes available
 *     tags:
 *       - Essay
 *     security:
 *      - BearerAuth: []
 *     responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Marking Scheme'
*/
router.get('/marking-scheme/all', jwt.verifyJWT, essayController.getMarkingSchemes);

/**
 * @swagger
 * /essay/marking-scheme/{id}:
 *   get:
 *     summary: Retrieve a marking scheme by id
 *     description: Retrieve a marking scheme by id
 *     tags:
 *       - Essay
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *     responses:
 *       '200':
 *          description: Successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Marking Scheme'
 * 
 * components:
 *   schemas:
 *      Marking Scheme:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            format: uuid
 *            example: 628bf079242f7147acd2ebf4
 *          name:
 *            type: string
 *            format: uuid
 *            example: 628b07acfca14c127cc5e272
 *          minWords:
 *            type: number
 *            example: 250
 *          relatedExam:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Exam'
 *          sections:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Marking Scheme Section'
 *          calculationMode:
 *            type: string
 *            example: Mean
 *          totalFullScore:
 *            type: number
 *            example: 9
 *
 *      Marking Scheme Section:
 *        type: object
 *        properties:
 *          sequence:
 *            type: number
 *            example: 1
 *          description:
 *            type: string
 *            example: Lexical Resource
 *          supplementaryText:
 *            type: string
 *            example: This refers to the range of vocabulary the test takers have used and the accuracy and appropriacy of use in terms of the specific task.
 *          weighting:
 *            type: number
 *            example: 1
 *          fullScore:
 *            type: number
 *            example: 9
*/
router.get('/marking-scheme/:id', jwt.verifyJWT, essayController.getMarkingSchemeById);

/********** The following APIs are for next phase enhancement **********/

router.put('/:id', essayController.updateEssay);

router.delete('/:id', essayController.deleteEssay);

router.post('/attachment/add', essayController.addEssayAttachment);

router.get('/attachment/:id', essayController.getEssayAttachment);

router.delete('/attachment/:id', essayController.delEssayAttachment);

module.exports = router;