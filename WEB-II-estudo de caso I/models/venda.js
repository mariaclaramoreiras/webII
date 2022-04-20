const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const res = require('express/lib/response')

class Venda {
    adicionaVenda(venda, res) {
        const data = moment(venda.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const vendaDatada = { ...venda, data }
        const valor_total = venda.valor_quilo * venda.quantidade_kg
        const vendaValor = { ...vendaDatada, valor_total }
        const sql = 'INSERT INTO Vendas SET ?'

        conexao.query(sql, vendaValor, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    deletarVenda(id, res){
        const sql = `DELETE from Vendas C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    pesquisarVenda(id, res) {
        const sql = `SELECT * from Vendas C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    atualizarVenda(venda, id, res) {
        const sql = `UPDATE Vendas V SET V.quantidade_kg = ${venda.quantidade_kg},
        V.valor_quilo = ${venda.valor_quilo}, V.valor_total = ${venda.quantidade_kg * venda.valor_quilo} WHERE id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
}

module.exports = new Venda
