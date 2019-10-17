module.exports = (req, res, next) => {
	res.clearCookie('JWT').status(200).send({ msg: 'cookie cleared' });
};