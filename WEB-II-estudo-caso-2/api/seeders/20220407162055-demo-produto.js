module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Produtos', [
			{
				Distribuidor_id: 1,
				nome: 'uva',
				preco: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				Distribuidor_id: 4,
				nome: 'morango',
				preco: 7,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 3,
				nome: 'manga',
				preco: 5,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 2,
				nome: 'pera',
				preco: 8,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 2,
				nome: 'pêssego',
				preco: 9,
				createdAt: new Date(),
				updatedAt: new Date()
			}    
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Produtos', null, {})
  }
}

