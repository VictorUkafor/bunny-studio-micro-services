'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: {
      type: DataTypes.TEXT,
    },
    state: {
      type: DataTypes.STRING,
    },
  });

  Task.associate = function(models) {
    Task.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  
  return Task;
};