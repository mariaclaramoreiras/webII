const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const res = require('express/lib/response')

class Produto{
    adicionaProduto(produto, res){
        const sql = 'INSERT INTO Produtos SET ?'

        conexao.query(sql, produto, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    deletarProduto(id, res){
        const sql = `DELETE from Produtos C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    pesquisarProduto(id, res) {
        const sql = `SELECT * from Produtos C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

}

module.exports = new Produto