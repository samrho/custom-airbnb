'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Room', [{
      user_id: 1,
      name: '경리단길 집',
      type: 'motel',
      max_guest: 4,
      price: 50000,
      country: "KOREA",
      city: "SEOUL",
      bathroom_count: 1,
      bedroom_count: 1,
      kitchen_count: 1,
      parking_price: 0,
      is_internet_available: 1
    },{
      user_id: 2,
      name: '온천장 집',
      type: 'guestHouse',
      max_guest: 3,
      price: 48000,
      country: "KOREA",
      city: "BUSAN",
      bathroom_count: 1,
      bedroom_count: 2,
      kitchen_count: 1,
      parking_price: -1,
      is_internet_available: 1
    }, {
      user_id: 1,
      name: '무등산 집',
      type: 'hotel',
      max_guest: 5,
      price: 60000,
      country: "KOREA",
      city: "GWANGJU",
      bathroom_count: 2,
      bedroom_count: 2,
      kitchen_count: 1,
      parking_price: 0,
      is_internet_available: 1
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
