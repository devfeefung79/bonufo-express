const { Router } = require('express');
const feedbackController = require('../controllers/feedbackController');
const jwt = require('../middleware/verifyJWT');

const router = Router();

/**
 * @swagger
 * /feedback/add:
 *   post:
 *     summary: Create a new feedback object with request
 *     description: Create a new feedback object with request
 *     tags:
 *       - Feedback
 *     security:
 *      - BearerAuth: []
 *     requestBody:
 *       required: true
 *       description: A JSON object that contains the feedbacks
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/New Feedback'
 *     responses:
 *       '200':
 *          description: Successful response
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Feedback'
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
 *      New Feedback:
 *        type: object
 *        properties:
 *          essayId:
 *            type: string
 *            format: uuid
 *            example: 628bf0f8242f7147acd2ebf7
 *          essay:
 *            type: string
 *            example: This is a sample essay
 *          submitterId:
 *            type: string
 *            format: uuid
 *            example: 65e16c81b60bbe01e82bacdd
 *          submitterName:
 *            type: string
 *            example: davidkong2
 *          sections:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Feedback Section'
 *          overallComment:
 *            type: string
 *            example: Good
 *          totalScore:
 *            type: number
 *            example: 9
 *      Feedback Section:
 *        type: object
 *        properties:
 *          sequence:
 *            type: number
 *            example: 1
 *          description:
 *            type: string
 *            example: Content and Coherence
 *          supplementaryText:
 *            type: string
 *            example: Number of ideas, Quality of ideas, Organization of ideas, Examples and supporting details
 *          weighting:
 *            type: number
 *            example: 1
 *          fullScore:
 *            type: number
 *            example: 12
 *          score:
 *            type: number
 *            example: 10
 *          comment:
 *            type: string
 *            example: Suit the topic
*/
router.post('/add', jwt.verifyJWT, feedbackController.addFeedback);

/**
 * @swagger
 * /feedback/{id}:
 *   get:
 *     summary: Retrieve a list of feedback by id
 *     description: Retrieve a list of feedback by id
 *     tags:
 *       - Feedback
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
 *                $ref: '#/components/schemas/Feedback'
 *       '404':
 *          description: Not found
 *          content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 * 
 * components:
 *   schemas:
 *      Feedback:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            format: uuid
 *            example: 62704496284c257466f0f8fe
 *          essayId:
 *            type: string
 *            format: uuid
 *            example: 628bf0f8242f7147acd2ebf7
 *          essay:
 *            type: string
 *            example: Dear Mr. Smith,...
 *          submitterId:
 *            type: string
 *            format: uuid
 *            example: 62959b87f7781d5bb0abdc9f
 *          submitterName:
 *            type: string
 *            example: feenafung7295
 *          submittedDateTime:
 *            type: string
 *            example: 2022-05-31T21:21:07.210Z
 *          sections:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Feedback Section'
 *          overallComment:
 *            type: string
 *            example: It is good, but still need improvement, keep going.
 *          totalScore:
 *            type: number
 *            example: 8.5
 *          __v:
 *            type: number
 *            example: 0
*/
router.get('/:id', jwt.verifyJWT, feedbackController.getFeedbackById);

/**
 * @swagger
 * /feedback/by-user/{id}:
 *   get:
 *     summary: Retrieve a list of feedback by user id
 *     description: Retrieve a list of feedback by user id
 *     tags:
 *       - Feedback
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
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Feedback'
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
router.get('/by-user/:id', jwt.verifyJWT, feedbackController.getFeedbackByUserId);

/**
 * @swagger
 * /feedback/by-essay/{id}:
 *   get:
 *     summary: Retrieve a list of feedback by essay id
 *     description: Retrieve a list of feedback by essay id
 *     tags:
 *       - Feedback
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
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Feedback'
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
router.get('/by-essay/:id', jwt.verifyJWT, feedbackController.getFeedbackByEssayId);

/********** The following APIs are for next phase enhancement **********/

router.put('/:id', feedbackController.updateFeedback);

router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;