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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionId:
 *                 type: string
 *               question:
 *                 type: string
 *               submitterId:
 *                 type: string
 *               submitterName:
 *                 type: string
 *               submittedDateTime:
 *                 type: object
 *               state:
 *                 type: string
 *               markingSchemeId:
 *                 type: string
 *               markingSchemeName:
 *                 type: string
 *               content:
 *                 type: string
 *               numberOfFeedbacks:
 *                 type: integer
 *               wordCount:
 *                 type: integer
 *     responses:
 *       '200':
 *          description: Created
 *       '400':
 *          description: Request Body content is empty
 *       '500':
 *          description: Internal Error
 * 
*/
router.post('/add', jwt.verifyJWT, essayController.addEssay);

/**
 * @swagger
 * /essay/{id}:
 *   get:
 *     summary: Retrieve an essay object by id
 *     description: Retrieve an essay object by id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/:id', jwt.verifyJWT, essayController.getEssayById);

/**
 * @swagger
 * /essay/by-user/{id}:
 *   get:
 *     summary: Retrieve a list of essay by user id
 *     description: Retrieve a list of essay by user id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/by-user/:id', jwt.verifyJWT, essayController.getEssayByUserId);

/**
 * @swagger
 * /essay/by-question/{id}:
 *   get:
 *     summary: Retrieve a list of essay by question id
 *     description: Retrieve a list of essay by question id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/by-question/:id', jwt.verifyJWT, essayController.getEssayByQuestionId);

/**
 * @swagger
 * /essay/marking-scheme:
 *   get:
 *     summary: Retrieve all marking schemes available
 *     description: Retrieve all marking schemes available
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/marking-scheme/all', jwt.verifyJWT, essayController.getMarkingSchemes);

/**
 * @swagger
 * /essay/marking-scheme/{id}:
 *   get:
 *     summary: Retrieve a marking scheme by id
 *     description: Retrieve a marking scheme by id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
*/
router.get('/marking-scheme/:id', jwt.verifyJWT, essayController.getMarkingSchemeById);

/********** The following APIs are for next phase enhancement **********/

router.put('/:id', essayController.updateEssay);

router.delete('/:id', essayController.deleteEssay);

router.post('/attachment/add', essayController.addEssayAttachment);

router.get('/attachment/:id', essayController.getEssayAttachment);

router.delete('/attachment/:id', essayController.delEssayAttachment);

module.exports = router;