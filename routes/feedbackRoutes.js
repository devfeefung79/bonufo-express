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
*/
router.post('/add', jwt.verifyJWT, feedbackController.addFeedback);

/**
 * @swagger
 * /feedback/{id}:
 *   get:
 *     summary: Retrieve a list of feedback by id
 *     description: Retrieve a list of feedback by id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/:id', jwt.verifyJWT, feedbackController.getFeedbackById);

/**
 * @swagger
 * /feedback/by-user/{id}:
 *   get:
 *     summary: Retrieve a list of feedback by user id
 *     description: Retrieve a list of feedback by user id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/by-user/:id', jwt.verifyJWT, feedbackController.getFeedbackByUserId);

/**
 * @swagger
 * /feedback/by-essay/{id}:
 *   get:
 *     summary: Retrieve a list of feedback by essay id
 *     description: Retrieve a list of feedback by essay id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/by-essay/:id', jwt.verifyJWT, feedbackController.getFeedbackByEssayId);

/********** The following APIs are for next phase enhancement **********/

router.put('/:id', feedbackController.updateFeedback);

router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;