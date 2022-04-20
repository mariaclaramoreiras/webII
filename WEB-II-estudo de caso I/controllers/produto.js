const res = require('express/lib/response')
const Produto = require('../models/produto')

module.exports = app => {
    app.get('/produto/:id', (req, res) => {
        const id = req.params.id
        Produto.pesquisarProduto(id, res)
    })

    app.post('/produto', (req, res) => {
        const produto = req.body
        Produto.adicionaProduto(produto, res)
    })

    app.delete('/produto/:id', (req, res) => {
        const id = req.params.id
        Produto.deletarProduto(id, res)
    })

}