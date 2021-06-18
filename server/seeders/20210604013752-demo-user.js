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
   return queryInterface.bulkInsert('users', [{
     name: 'test',
     email: 'test@test.com',
     contactNumber: '+921234444444',
     organization: 'Test Organization',
     role: 'Admin',
     emailVerified: true,
     adminApproved: false,
     newsletter: false,
     volunteer: false,
     password: 'test',
     salt: 'test',
     createdAt: new Date(),
     updatedAt: new Date()
   }], {});
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
