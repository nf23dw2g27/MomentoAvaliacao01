// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
module.exports = (sequelize, DataTypes) => {
  const autor = require("./autormodel")(sequelize, DataTypes);
  const editora = require("./editoramodel")(sequelize, DataTypes);
  const livro = sequelize.define(
    "livro",
    {
      livroId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      autorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: autor,
          key: "autorId",
        },
      },
      editoraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: editora,
          key: "editoraId",
        },
      },
      disponibilidade: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Definido como disponível por defeito
      },
      nPaginas: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      categoria: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      sumario: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "livro", // Especifica o nome da tabela
      timestamps: true, // Desativa timestamps automáticos (createdAt, updatedAt)
    }
  );
  return livro;
};
// module.exports = livro;
