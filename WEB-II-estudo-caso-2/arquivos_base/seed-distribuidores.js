module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Distribuidores', [
			{
				CNPJ: '00000000000',
				nome: 'FortiFruti',
				email: 'fortifruti@email.com',
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '111111111111',
				nome: 'Furta Pão',
				email: 'pao@email.com',
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '2222222222',
				nome: 'Frutas Norte',
				email: 'norte@email.com',
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '33333333333',
				nome: 'Marabá Frutas',
				email: 'marafrutas@email.com',
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '4444444444',
				nome: 'Horti Fruti',
				email: 'hortifruti@email.com',
				endereco: 'Cidade Nova',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '77777777777777',
				nome: 'Top Frutas',
				email: 'topfrutas@email.com',
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
  }
}
