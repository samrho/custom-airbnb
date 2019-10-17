'use strict';
const dummyRoom = require("../dummy/room.dummy");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Room', dummyRoom, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Room', null, {});
  }
};
