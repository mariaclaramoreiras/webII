const database = require('../models')

class ProdutoController {
    static async verificarProdutos(req, res) {
        try{
            const  todosOsProdutos = await database.Produtos.findAll()
            return res.status(200).json(todosOsProdutos) 
        } catch{
            return res.status(500).json(error.message)
        }
        
    }

    static async verificaUmProduto(req, res) {
        const { id } = req.params
        try {
            const umProduto = await database.Produtos.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umProduto)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarProduto(req, res) {
        const novoProduto = req.body

        try {
            const produtoCriado = await database.Produtos.create(novoProduto)
            return res.status(200).json(produtoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaProduto(req, res) {
        const { id } = req.params
        const novasInformacoes = req.body

        try {
            await database.Produtos.update(novasInformacoes, { where: { id: Number(id) } })
            const produtoAtualizado = await database.Produtos.findOne({ where: { id: Number(id) } })
            return res.status(200).json(produtoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaProduto(req, res) {
        const {id} = req.params

        try {
            await database.Produtos.destroy({ where: { id: Number(id) } })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ProdutoController