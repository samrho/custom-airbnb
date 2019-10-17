const { encrypt } = require("../util/encryptor");

module.exports = async (req, res, next) => {
	const hashedPassword = await encrypt(req.body.password);
	return res.send({ hashedPassword });
};