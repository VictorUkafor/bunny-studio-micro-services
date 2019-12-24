'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  User.associate = function(models) {
    User.hasMany(models.Task, {
      foreignKey: 'userId',
      as: 'tasks',
    });
  };

  return User;
};