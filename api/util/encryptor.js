const bcrypt = require('bcrypt');

const encrypt = async (password, saltRounds = 2) => {
	const hashedPassword = await new Promise((resolve, reject) => {
		bcrypt.hash(password, saltRounds, (err, hash) => {
			if (err) reject(err);
			resolve(hash);
		});
	});
	return hashedPassword;
};

module.exports = {
	encrypt
};
