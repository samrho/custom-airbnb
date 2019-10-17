'use strict';
const dummyReservation = require('../dummy/reservation.dummy')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservation', dummyReservation, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservation', null, {});
  }
};
