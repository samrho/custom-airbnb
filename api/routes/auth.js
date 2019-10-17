const express = require('express');
const router = express.Router();
const checkToken = require('../middlewares/login');
const tokenRemover = require("../middlewares/tokenRemover");
const register = require("../middlewares/register");
router.get('/', (req, res) => {
	res.status(200).send('This is an authentication server');
});

router.post('/login', checkToken, function (req, res, next) {
	res.status(200).send({ access_token: '' });
});

router.post('/register', register);
router.get('/logout', tokenRemover);

module.exports = router;
