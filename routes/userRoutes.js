const { Router } = require('express');
const userController = require('../controllers/userController');
const jwt = require('../middleware/verifyJWT');

const router = Router();

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('/refresh', userController.getAccessToken);

router.get('/logout', userController.logout);

router.get('/:id', userController.getUserById);

/********** The following API is for next phase enhancement **********/

router.put('/:id', userController.updateUserById);

module.exports = router;