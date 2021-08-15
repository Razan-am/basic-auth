'use strict';


const UserModel =(sequelize, DataTypes)=>sequelize.define('auth', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports=UserModel;