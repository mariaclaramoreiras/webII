'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vendas.belongsTo(models.Clientes, {foreignKey: 'Cliente_id', as: 'Clientes'})
      Vendas.belongsTo(models.Produtos, {foreignKey: 'Produto_id', as: 'Produtos'})
    }
  }
  Vendas.init({
    Cliente_id: DataTypes.INTEGER,
    Produto_id: DataTypes.INTEGER,
    quantidade_kg: DataTypes.INTEGER,
    valor_total: DataTypes.INTEGER,
    valor_quilo: DataTypes.INTEGER,
    forma_pagamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendas',
  });
  return Vendas;
};