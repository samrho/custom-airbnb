'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('User', [{
			email: 'seungnam2@gmail.com',
			user_password: '1234'
		},{
			email: 'example@example.com',
			user_password: '1234'
		},{
			email: 'bigrsnboy@naver.com',
			user_password: '1234'
		}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		/*
		 Add reverting commands here.
		 Return a promise to correctly handle asynchronicity.

		 Example:
		 return queryInterface.bulkDelete('People', null, {});
		 */
	}
};
