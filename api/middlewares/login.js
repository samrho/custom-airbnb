const { User } = require('../db/models/index');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const jwt_decode = require('jwt-decode');
const expiresIn = 24 * 60 * 60;

const checkToken = async (req, res, next) => {
	if (req.cookies.JWT) {
		console.log(req.cookies.JWT);
	}
	const { email, password } = req.body;
	const user = await User.findOne({ where: { email: email } });
	if (email === user.email && password === user.user_password) {
		const token = jwt.sign({ email, password }, SECRET_KEY, { expiresIn });
		return res.cookie("JWT", token, { httpOnly: false }).status(200).send({message: 'login success'})
	}
	next();
};


module.exports = checkToken;