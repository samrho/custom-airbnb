'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservation', [{
      user_id: 3,
      room_id: 2,
      kid_count: 0,
      baby_count: 0,
      adult_count: 2,
      start_date: 191015,
      end_date: 191016
    },
      {
        user_id: 1,
        room_id: 1,
        kid_count: 1,
        baby_count: 1,
        adult_count: 1,
        start_date: 191018,
        end_date: 191019
      },{
        user_id: 2,
        room_id: 3,
        kid_count: 0,
        baby_count: 0,
        adult_count: 2,
        start_date: 191018,
        end_date: 191020
      },{
        user_id: 1,
        room_id: 2,
        kid_count: 0,
        baby_count: 0,
        adult_count: 2,
        start_date: 191111,
        end_date: 191112
      }], {});
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
