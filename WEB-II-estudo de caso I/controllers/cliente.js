const Cliente = require('../models/cliente')

module.exports = app => {
    app.get('/cliente/:id', (req, res) => {
        const id = req.params.id
        Cliente.pesquisarCliente(id, res)
    })

    app.post('/cliente', (req, res) => {
    const cliente = req.body
    Cliente.adicionaCliente(cliente, res)
    })

    app.delete('/cliente/:id', (req, res) => {
        const id = req.params.id
        Cliente.deletarCliente(id, res)
    })
}