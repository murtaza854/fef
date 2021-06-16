'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('projects', [
      {
        name: 'Food Drive',
        amountRaised: 50000,
        totalAmount: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Water Drive',
        amountRaised: 80000,
        totalAmount: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothes Drive',
        amountRaised: 50610,
        totalAmount: 103490,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test Drive',
        amountRaised: 15970,
        totalAmount: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Example Drive',
        amountRaised: 90000,
        totalAmount: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fun Drive',
        amountRaised: 96500,
        totalAmount: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'FEF Drive',
        amountRaised: 67400,
        totalAmount: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Boring Drive',
        amountRaised: 50000,
        totalAmount: 125000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
