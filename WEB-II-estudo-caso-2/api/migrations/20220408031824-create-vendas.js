'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Cliente_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'Clientes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      Produto_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'Produtos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      quantidade_kg: {
        type: Sequelize.INTEGER
      },
      valor_total: {
        type: Sequelize.INTEGER
      },
      valor_quilo: {
        type: Sequelize.INTEGER
      },
      forma_pagamento: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vendas');
  }
};