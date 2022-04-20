const database = require('../models')

class CompraController {
    static async verificarCompras(req, res) {
        try{
            const  todasAsCompras = await database.Compras.findAll()
            return res.status(200).json(todasAsCompras) 
        } catch{
            return res.status(500).json(error.message)
        }
        
    }

    static async verificaUmaCompra(req, res) {
        const { id } = req.params
        try {
            const umaCompra = await database.Compras.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaCompra)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarCompra(req, res) {
        const novaCompra = req.body

        try {
            const compraCriada = await database.Compras.create(novaCompra)
            return res.status(200).json(compraCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaCompra(req, res) {
        const { id } = req.params
        const novasInformacoes = req.body

        try {
            await database.Compras.update(novasInformacoes, { where: { id: Number(id) } })
            const compraAtualizada = await database.Compras.findOne({ where: { id: Number(id) } })
            return res.status(200).json(compraAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaCompra(req, res) {
        const {id} = req.params

        try {
            await database.Compras.destroy({ where: { id: Number(id) } })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CompraController