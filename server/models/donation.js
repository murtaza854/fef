'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Donation.belongsTo(models.users, {foreignKey: 'userID', as: 'user'})
    }
  };
  Donation.init({
    amount: DataTypes.DECIMAL,
    paymentMethod: DataTypes.STRING,
    paid: DataTypes.BOOLEAN,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};