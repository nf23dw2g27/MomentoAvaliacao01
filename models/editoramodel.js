// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
module.exports = (sequelize, DataTypes) => {
const editora = sequelize.define('editora', {
        editoraId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        morada: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    }, 
    {
    tableName: 'editora', // Especifica o nome da tabela
    timestamps: false,  // Desativa timestamps automáticos (createdAt, updatedAt)
    });
return editora;
}
// module.exports = editora;
