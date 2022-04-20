'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produtos.belongsTo(models.Distribuidores, {foreignKey: 'Distribuidor_id', as: 'Distribuidores'})
    }
  }
  Produtos.init({
    Distribuidor_id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    preco: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};