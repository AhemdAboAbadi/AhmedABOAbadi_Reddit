const express = require('express');

const router = express.Router();

const { errorNotFound, errorServer } = require('../controllers');

const signupHandler = require('../controllers/signupHandlar');
const checkLogin = require('../controllers/loginHandlar');
const profilePage = require('../controllers/profilePage');
const checkUser = require('../controllers/checkUser');
const addDataPostHandler = require('../controllers/postData');
const getPosts = require('../controllers/getPosts');
const getEmail = require('../controllers/getEmail');

// router.post('/login', loginQuery);
// router.post('/postQuery', postQuery);
router.post('/signup', signupHandler);
router.post('/login', checkLogin);

router.get('/posts', checkUser, getPosts);
router.post('/addPost', checkUser, addDataPostHandler);
router.get('/profile', profilePage);
router.get('/profileUser', checkUser, getEmail);
router.post('/logout', (req, res) => {
  res.clearCookie('token').redirect('/');
});

router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
