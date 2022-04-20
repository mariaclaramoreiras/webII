const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: 'admin',
    database: 'distribuicao-frutas'
})

module.exports = conexao