const res = require('express/lib/response')
const Distribuidor = require('../models/distribuidor')

module.exports = app => {
    app.get('/distribuidor/:id', (req, res) => {
        const id = req.params.id
        Distribuidor.pesquisarDistribuidor(id, res)
    })

    app.post('/distribuidor', (req, res) => {
        const distribuidor = req.body
        Distribuidor.adicionaDistribuidor(distribuidor, res)
    })

    app.delete('/distribuidor/:id', (req, res) => {
        const id = req.params.id
        Distribuidor.deletarDistribuidor(id, res)
    })

}