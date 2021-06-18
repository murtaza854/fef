'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contactNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      organization: {
        allowNull: false,
        type: Sequelize.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING
      },
      emailVerified: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      adminApproved: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      newsletter: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      volunteer: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      salt: {
        allowNull: false,
        type: Sequelize.STRING
      },
      superuser: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};