const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const res = require('express/lib/response')

class Distribuidor{
    adicionaDistribuidor(distribuidor, res){

        const sql = 'INSERT INTO Distribuidores SET ?'

        conexao.query(sql, distribuidor, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    deletarDistribuidor(id, res){
        const sql = `DELETE from Distribuidores C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    pesquisarDistribuidor(id, res) {
        const sql = `SELECT * from Distribuidores C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

}

module.exports = new Distribuidor