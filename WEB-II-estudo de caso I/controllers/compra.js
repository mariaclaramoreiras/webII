const res = require('express/lib/response')
const Compra = require('../models/compra')

module.exports = app => {
    app.get('/compra/:id', (req, res) => {
        const id = req.params.id
        Compra.pesquisarCompra(id, res)
    })

    app.post('/compra', (req, res) => {
        const compra = req.body
        Compra.adicionaCompra(compra, res)
    })

    app.delete('/compra/:id', (req, res) => {
        const id = req.params.id
        Compra.deletarCompra(id, res)
    })

    app.put('/compra/:id', (req, res) => {
        const id = req.params.id
        const compra = req.body
        Compra.atualizarCompra(compra, id, res)
    })
}

    // async criarCompra(req, res) {
    //     const aux = Compra.adicionarCompra(req.body)
    //     res.status(201).json()
    // }
