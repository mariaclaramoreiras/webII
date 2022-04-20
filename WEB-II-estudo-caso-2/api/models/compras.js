'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compras.belongsTo(models.Distribuidores, {foreignKey: 'Distribuidor_id', as: 'Distribuidores'})
      Compras.belongsTo(models.Produtos, {foreignKey: 'Produto_id', as: 'Produtos'})
    }
  }
  Compras.init({
    Distribuidor_id: DataTypes.INTEGER,
    Produto_id: DataTypes.INTEGER,
    quantidade_kg: DataTypes.INTEGER,
    valor_total: DataTypes.INTEGER,
    valor_quilo: DataTypes.INTEGER,
    forma_pagamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Compras',
  });
  return Compras;
};