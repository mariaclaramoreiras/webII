const database = require('../models')

class VendaController {
    static async verificarVendas(req, res) {
        try{
            const  todasAsVendas = await database.Vendas.findAll()
            return res.status(200).json(todasAsVendas) 
        } catch{
            return res.status(500).json(error.message)
        }
        
    }

    static async verificaUmaVenda(req, res) {
        const { id } = req.params
        try {
            const umaVenda = await database.Vendas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaVenda)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarVenda(req, res) {
        const novaVenda = req.body

        try {
            const vendaCriada = await database.Vendas.create(novaVenda)
            return res.status(200).json(vendaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaVenda(req, res) {
        const { id } = req.params
        const novasInformacoes = req.body

        try {
            await database.Vendas.update(novasInformacoes, { where: { id: Number(id) } })
            const vendaAtualizada = await database.Vendas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(vendaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaVenda(req, res) {
        const {id} = req.params

        try {
            await database.Vendas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    


}

module.exports = VendaController