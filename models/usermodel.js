// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        telemovel: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        firstName: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    }, 
    {
  tableName: 'users', // Especifica o nome da tabela
  timestamps: true,  // ativa timestamps automáticos (createdAt, updatedAt)
    });
    return User;
}
// module.exports = User;
