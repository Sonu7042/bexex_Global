const express= require('express');
const {signup, verifyEmail, login}= require('../controllers/authController');
const  googleAuth= require('../controllers/googleAuth');
const facebookAuth= require('../controllers/facebookAuth');

const router= express.Router()

router.post('/signup', signup);
router.post('/verify-email', verifyEmail);
router.post('/login', login);


router.post('/google-auth', googleAuth);
router.post('/facebook-auth', facebookAuth);



module.exports= router;
