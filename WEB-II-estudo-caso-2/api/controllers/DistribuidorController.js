const database = require('../models')

class DistribuidorController {
    static async verificarDistribuidores(req, res) {
        try {
            const todosOsDistribuidores = await database.Distribuidores.findAll()
            return res.status(200).json(todosOsDistribuidores)
        } catch {
            return res.status(500).json(error.message)
        }

    }

    static async verificaUmDistribuidor(req, res) {
        const { id } = req.params
        try {
            const umDistribuidor = await database.Distribuidores.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umDistribuidor)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarDistribuidor(req, res) {
        const novoDistribuidor = req.body

        try {
            const distribuidorCriado = await database.Distribuidores.create(novoDistribuidor)
            return res.status(200).json(distribuidorCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaDistribuidor(req, res) {
        const { id } = req.params
        const novasInformacoes = req.body

        try {
            await database.Distribuidores.update(novasInformacoes, { where: { id: Number(id) } })
            const distribuidorAtualizado = await database.Distribuidores.findOne({ where: { id: Number(id) } })
            return res.status(200).json(distribuidorAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaDistribuidor(req, res) {
        const {id} = req.params

        try {
            await database.Distribuidores.destroy({ where: { id: Number(id) } })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = DistribuidorController