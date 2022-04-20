const database = require('../models')

class ClienteController {
    static async verificarClientes(req, res) {
        try{
            const  todosOsClientes = await database.Clientes.findAll()
            return res.status(200).json(todosOsClientes) 
        } catch{
            return res.status(500).json(error.message)
        }
        
    }

    static async verificaUmCliente(req, res) {
        const { id } = req.params
        try {
            const umCliente = await database.Clientes.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umCliente)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarCliente(req, res) {
        const novoCliente = req.body

        try {
            const clienteCriado = await database.Clientes.create(novoCliente)
            return res.status(200).json(clienteCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaCliente(req, res) {
        const { id } = req.params
        const novasInformacoes = req.body

        try {
            await database.Clientes.update(novasInformacoes, { where: { id: Number(id) } })
            const clienteAtualizado = await database.Clientes.findOne({ where: { id: Number(id) } })
            return res.status(200).json(clienteAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaCliente(req, res) {
        const {id} = req.params

        try {
            await database.Clientes.destroy({ where: { id: Number(id) } })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClienteController