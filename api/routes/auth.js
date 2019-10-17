const express = require('express');
const router = express.Router();
const checkToken = require('../middlewares/login');
const {encrypt} = require("../util/encrpytor");
const tokenRemover = require("../middlewares/tokenRemover");
router.get('/', (req, res) => {
	res.status(200).send('This is an authentication server');
});

router.post('/login', checkToken, function (req, res, next) {
	res.status(200).send({ access_token: '' });
});

router.post('/register', async function (req, res, next) {
	const hashedPassword = await encrypt('5904zkfa')
	res.send({hashedPassword});
});

router.get('/logout', tokenRemover);

module.exports = router;
