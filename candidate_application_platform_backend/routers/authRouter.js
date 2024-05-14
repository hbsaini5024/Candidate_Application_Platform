const { loginController, signupController } = require('../controllers/AuthControllers')

const router = require('express').Router()


router.post('/login',loginController);
router.post('/signup',signupController);


module.exports = router;
