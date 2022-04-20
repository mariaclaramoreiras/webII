const express = require('express')
const distribuidores = require('./distribuidoresRoute')
const clientes = require('./clienteRoute')
const produtos = require('./produtosRoute')
const compras = require('./comprasRoute')
const vendas = require('./vendasRoute')

module.exports = app => {
    app.use(express.json())
    app.use(distribuidores)
    app.use(clientes)
    app.use(produtos)
    app.use(compras)
    app.use(vendas)
} 