'use strict';
const dummyUser = require('../dummy/user.dummy');
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('User', dummyUser, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('User', null, {});
	},
};
