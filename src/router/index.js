const express = require('express');

const router = express.Router();

const { errorNotFound, errorServer } = require('../controllers');

const signupHandler = require('../controllers/signupHandlar');
const checkLogin = require('../controllers/loginHandlar');
const profilePage = require('../controllers/profilePage');
const getProfile = require('../controllers/getDataProfile');

// router.post('/login', loginQuery);
// router.post('/postQuery', postQuery);
router.post('/signup', signupHandler);
router.post('/login', checkLogin);

router.get('/profile', profilePage);
router.get('/profileUser', getProfile);
router.post('/logout', (req, res) => {
  res.clearCookie('token').redirect('/');
});

router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
