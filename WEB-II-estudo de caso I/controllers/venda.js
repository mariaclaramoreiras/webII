const Venda = require('../models/venda')

module.exports = app => {
    app.get('/venda/:id', (req, res) => {
        const id = req.params.id
        Venda.pesquisarVenda(id, res)
    })

    app.post('/venda', (req, res) => {
    const venda = req.body
    Venda.adicionaVenda(venda, res)
    })

    app.delete('/venda/:id', (req, res) => {
        const id = req.params.id
        Venda.deletarVenda(id, res)
    })

    app.put('/venda/:id', (req, res) => {
        const id = req.params.id
        const venda = req.body
        Venda.atualizarVenda(venda, id, res)
    })
}