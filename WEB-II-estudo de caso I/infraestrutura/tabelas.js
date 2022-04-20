class Tabelas{
    init(conexao) {
        this.conexao = conexao
        this.criarCliente()
        this.criarDistribuidor()
        this.criarProduto()
        this.criarCompra()
        this.criarVenda()
        }

    criarDistribuidor() {
        const sql = 'CREATE TABLE IF NOT EXISTS Distribuidores'
                + '(id int NOT NULL AUTO_INCREMENT,'
                + 'CNPJ varchar(14) NOT NULL,'
                + 'nome varchar(50) NOT NULL,'
                + 'email varchar(50) NOT NULL,'
                + 'endereco varchar(50) NOT NULL,'
                + 'PRIMARY KEY(id))';
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabelas distribuidores criada com sucesso')
            }
        })
    }

    criarCliente() {
        const sql = 'CREATE TABLE IF NOT EXISTS Clientes'
                + '(id int NOT NULL AUTO_INCREMENT,'
                + 'Distribuidor_id int,'
                + 'CPF varchar(11) NOT NULL,'
                + 'nome varchar(50) NOT NULL,'
                + 'email varchar(50) NOT NULL,'
                + 'endereco varchar(50) NOT NULL,'
                + 'PRIMARY KEY(id),'
                + 'CONSTRAINT FK_Distribuidor FOREIGN KEY (Distribuidor_id)'
                + 'REFERENCES Distribuidores(id))';              
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabelas clientes criada com sucesso')
            }
        })
    }

    criarProduto() {
        const sql = 'CREATE TABLE IF NOT EXISTS Produtos'
                + '(id int NOT NULL AUTO_INCREMENT,'
                + 'Distribuidor_id int,'
                + 'nome varchar(50) NOT NULL,'
                + 'preco int NOT NULL,'
                + 'PRIMARY KEY(id),'
                + 'CONSTRAINT FK_Distribuidor FOREIGN KEY (Distribuidor_id)'
                + 'REFERENCES Distribuidores(id))';
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabelas produtos criada com sucesso')
            }
        })
    }

    criarCompra() {
        const sql = 'CREATE TABLE IF NOT EXISTS Compras'
                + '(id int NOT NULL AUTO_INCREMENT,'
                + 'Distribuidor_id int,'
                + 'Produto_id int NOT NULL,'
                + 'quantidade_kg int NOT NULL,'
                + 'valor_total int NOT NULL,'
                + 'valor_quilo int NOT NULL,'
                + 'forma_pagamento varchar(20) NOT NULL,'
                + 'data datetime NOT NULL,'
                + 'PRIMARY KEY(id),'
                + 'CONSTRAINT FK_Distribuidor_id FOREIGN KEY (Distribuidor_id)'
                + 'REFERENCES Distribuidores(id),'
                + 'CONSTRAINT FK_Produto_id FOREIGN KEY (Produto_id)'
                + 'REFERENCES Produtos(id))';
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabelas compras criada com sucesso')
            }
        })
    }

    criarVenda() {
        const sql = 'CREATE TABLE IF NOT EXISTS Vendas'
                + '(id int NOT NULL AUTO_INCREMENT,'
                + 'Cliente_id int,'
                + 'Produto_id int NOT NULL,'
                + 'quantidade_kg int NOT NULL,'
                + 'valor_total int NOT NULL,'
                + 'valor_quilo int NOT NULL,'
                + 'forma_pagamento varchar(20) NOT NULL,'
                + 'data datetime NOT NULL,'
                + 'PRIMARY KEY(id),'
                + 'CONSTRAINT FK_Cliente_id FOREIGN KEY (Cliente_id)'
                + 'REFERENCES Clientes(id),'
                + 'CONSTRAINT FK_Produtos_id FOREIGN KEY (Produto_id)'
                + 'REFERENCES Produtos(id))';
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabelas vendas criada com sucesso')
            }
        })
    }
}



module.exports = new Tabelas