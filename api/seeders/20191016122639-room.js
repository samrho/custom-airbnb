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
      bathroomCount: 1,
      bedroomCount: 1,
      kitchenCount: 1,
      parkingPrice: 0,
      isInternetAvailable: 1
    },{
      user_id: 2,
      name: '온천장 집',
      type: 'guestHouse',
      max_guest: 3,
      price: 48000,
      country: "KOREA",
      city: "BUSAN",
      bathroomCount: 1,
      bedroomCount: 2,
      kitchenCount: 1,
      parkingPrice: -1,
      isInternetAvailable: 1
    }, {
      user_id: 1,
      name: '무등산 집',
      type: 'hotel',
      max_guest: 5,
      price: 60000,
      country: "KOREA",
      city: "GWANGJU",
      bathroomCount: 2,
      bedroomCount: 2,
      kitchenCount: 1,
      parkingPrice: 0,
      isInternetAvailable: 1
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
