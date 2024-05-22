// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
module.exports = (sequelize, DataTypes) => {
const autor = sequelize.define('autor', {
        autorId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        pseudonimo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    }, 
    {
    tableName: 'autor', // Especifica o nome da tabela
    timestamps: false,  // Desativa timestamps automáticos (createdAt, updatedAt)
    });
    return autor;
}
// module.exports = autor;
