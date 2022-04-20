const conexao = require('../infraestrutura/conexao')
const res = require('express/lib/response')

class Cliente {
    adicionaCliente(cliente, res) {
        const sql = 'INSERT INTO Clientes SET ?'

        conexao.query(sql, cliente, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    deletarCliente(id, res){
        const sql = `DELETE from Clientes C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    pesquisarCliente(id, res) {
        const sql = `SELECT * from Clientes C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

}

module.exports = new Cliente