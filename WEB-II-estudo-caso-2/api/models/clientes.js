'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.belongsTo(models.Distribuidores, {foreignKey: 'Distribuidor_id', as: 'Distribuidores'})
    }
  }
  Clientes.init({
    Distribuidor_id: DataTypes.INTEGER,
    CPF: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};