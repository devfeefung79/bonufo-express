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
*/
router.post('/add', jwt.verifyJWT, essayController.addEssay);

/**
 * @swagger
 * /essay/{id}:
 *   get:
 *     summary: Retrieve an essay object by id
 *     description: Retrieve an essay object by id
*/
router.get('/:id', jwt.verifyJWT, essayController.getEssayById);

/**
 * @swagger
 * /essay/by-user/{id}:
 *   get:
 *     summary: Retrieve a list of essay by user id
 *     description: Retrieve a list of essay by user id
*/
router.get('/by-user/:id', jwt.verifyJWT, essayController.getEssayByUserId);

/**
 * @swagger
 * /essay/by-question/{id}:
 *   get:
 *     summary: Retrieve a list of essay by question id
 *     description: Retrieve a list of essay by question id
*/
router.get('/by-question/:id', jwt.verifyJWT, essayController.getEssayByQuestionId);

/**
 * @swagger
 * /essay/marking-scheme:
 *   get:
 *     summary: Retrieve all marking schemes available
 *     description: Retrieve all marking schemes available
*/
router.get('/marking-scheme/all', jwt.verifyJWT, essayController.getMarkingSchemes);

/**
 * @swagger
 * /essay/marking-scheme/{id}:
 *   get:
 *     summary: Retrieve a marking scheme by id
 *     description: Retrieve a marking scheme by id
*/
router.get('/marking-scheme/:id', jwt.verifyJWT, essayController.getMarkingSchemeById);

/********** The following APIs are for next phase enhancement **********/

router.put('/:id', essayController.updateEssay);

router.delete('/:id', essayController.deleteEssay);

router.post('/attachment/add', essayController.addEssayAttachment);

router.get('/attachment/:id', essayController.getEssayAttachment);

router.delete('/attachment/:id', essayController.delEssayAttachment);

module.exports = router;