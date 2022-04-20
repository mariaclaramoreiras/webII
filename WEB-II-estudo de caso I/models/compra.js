const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const res = require('express/lib/response')

class Compra{
    adicionaCompra(compra, res){
        const data = moment(compra.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const compraDatada = {...compra, data}

        const valor_total = compra.valor_quilo * compra.quantidade_kg
        const compraValor = {...compraDatada, valor_total}
        const sql = 'INSERT INTO Compras SET ?'

        conexao.query(sql, compraValor, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    deletarCompra(id, res){
        const sql = `DELETE from Compras C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    pesquisarCompra(id, res) {
        const sql = `SELECT * from Compras C WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    atualizarCompra(compra, id, res) {
        const sql = `UPDATE Compras C SET C.Distribuidor_id = ${compra.Distribuidor_id}, 
        C.Produto_id = ${compra.Produto_id} WHERE C.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
}

module.exports = new Compra