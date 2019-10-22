const bcrypt = require('bcrypt');

const encrypt = async (password, saltRounds = 2) => {
	return await new Promise((resolve, reject) => {
		bcrypt.hash(password, saltRounds, (err, hash) => {
			if (err) reject(err);
			resolve(hash);
		});
	});
};

module.exports = {
	encrypt,
};
