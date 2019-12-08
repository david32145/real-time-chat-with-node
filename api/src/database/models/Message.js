'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    owner: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    tableName: 'messages'
  });
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};