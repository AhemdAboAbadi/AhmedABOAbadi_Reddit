const express = require('express');

const router = express.Router();

const { errorNotFound, errorServer } = require('../controllers');
const loginQuery = require('../database/quires/loginQuery');
const postQuery = require('../database/quires/postQuery');
const signupQuery = require('../database/quires/signupQuery');

router.post('/login', loginQuery);
router.post('/postQuery', postQuery);
router.post('/signupQuery', signupQuery);

router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
