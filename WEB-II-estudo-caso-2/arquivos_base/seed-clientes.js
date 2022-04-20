module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Clientes', [
			{
				Distribuidor_id: 3,
				CPF: '22222222222',
				nome: 'Augusto Silva',
				email: 'augusto@email.com',
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 2,
				CPF: '111111111111',
				nome: 'Ana Paula',
				email: 'ana@email.com',
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 3,
				CPF: '22222222222',
				nome: 'Augusto Silva',
				email: 'augusto@email.com',
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 1,
				CPF: '33333333333',
				nome: 'Maria Júlia',
				email: 'maria@email.com',
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 4,
				CPF: '55555555555',
				nome: 'Laís Cristina',
				email: 'lais@email.com',
				endereco: 'São Félix',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 2,
				CPF: '77777777777',
				nome: 'Hanna Souza',
				email: 'hanna@email.com',
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Clientes', null, {})
	}
}
