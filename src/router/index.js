const express = require('express');

const router = express.Router();

const { errorNotFound, errorServer } = require('../controllers');
const loginQuery = require('../database/quires/loginQuery');
const postQuery = require('../database/quires/postQuery');
const signupQuery = require('../database/quires/signupQuery');
const signupHandler = require('../controllers/signupHandlar');
const checkLogin = require('../controllers/loginHandlar');

// router.post('/login', loginQuery);
// router.post('/postQuery', postQuery);
router.post('/signup', signupHandler);
router.post('/login', checkLogin);

router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
