const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Add a new user
 *     description: Post user register information to the database
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       description: A JSON object that contains the username, email, password and role.
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/New User'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '409':
 *         description: Conflict
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 * 
 * components:
 *   schemas:
 *      New User:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *            example: davidkong2
 *          email:
 *            type: string
 *            format: email
 *            example: davidkong2@gmail.com
 *          password:
 *            type: string
 *            format: password
 *            example: pass1234
 *          role:
 *            type: string
 *            example: Learner
*/
router.post('/signup', userController.signup);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: User login
 *     description: Get access token with correct user login information
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User Login'
 *     responses:
 *       '200':
 *          description: Successful response
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 * 
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *   schemas:
 *      User Login:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *            example: davidkong2
 *          email:
 *            type: string
 *            format: email
 *            example: davidkong2@gmail.com
 *          password:
 *            type: string
 *            format: password
 *            example: pass1234
*/
router.post('/login', userController.login);

router.get('/refresh', userController.getAccessToken);

router.get('/logout', userController.logout);

/**
 * @swagger
 * /user/:id:
 *   get:
 *     summary: Get a user by id
 *     description: Get a user by id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *       '404':
 *         description: Not found
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
 *      User:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            format: uuid
 *            example: 62732d9a1403354a60762ebd
 *          username:
 *            type: string
 *            example: feena1882
 *          email:
 *            type: string
 *            format: email
 *            example: feenafung1882@gmail.com
 *          password:
 *            type: string
 *            format: password
 *            example: $2b$10$nZrKYNEkWBw0dIffz4NhTedP77/.c1KW6POLWn49K.x78CsfEfbh.
 *          role:
 *            type: string
 *            example: Tutor
 *          __v:
 *            type: number
 *            example: 0
*/
router.get('/:id', userController.getUserById);

/********** The following API is for next phase enhancement **********/

router.put('/:id', userController.updateUserById);

module.exports = router;