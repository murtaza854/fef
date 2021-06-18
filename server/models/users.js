'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.Donation, {as: 'donations'});
    }
  };
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    organization: DataTypes.STRING,
    role: DataTypes.STRING,
    emailVerified: DataTypes.BOOLEAN,
    adminApproved: DataTypes.BOOLEAN,
    newsletter: DataTypes.BOOLEAN,
    volunteer: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    superuser: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};