module.exports = {
	up: (queryInterface, Sequelize) => {
		  return queryInterface.bulkInsert('Compras', [
			  {
				  Cliente_id: 2,
				  Produto_id: 1,
				  quantidade_kg: 5,
				  valor_total: 25,
				  valor_quilo: 5,
				  forma_pagamento: 'cartão de crédito',
				  createdAt: new Date(),
				  updatedAt: new Date()				 
			  },
			  {
				  Cliente_id: 1,
				  Produto_id: 3,
				  quantidade_kg: 2,
				  valor_total: 10,
				  valor_quilo: 5,
				  forma_pagamento: 'dinheiro',
				  createdAt: new Date(),
				  updatedAt: new Date()			
			  },
			  {
				  Cliente_id: 3,
				  Produto_id: 4,
				  quantidade_kg: 10,
				  valor_total: 80,
				  valor_quilo: 8,
				  forma_pagamento: 'cartão de crédito',
				  createdAt: new Date(),
				  updatedAt: new Date()		
				  },
			  {
				  Cliente_id: 4,
				  Produto_id: 2,
				  quantidade_kg: 3,
				  valor_total: 21,
				  valor_quilo: 7,
				  forma_pagamento: 'cartão de débito',
				  createdAt: new Date(),
				  updatedAt: new Date()		
			  },
			  {
				  Cliente_id: 5,
				  Produto_id: 5,
				  quantidade_kg: 3,
				  valor_total: 27,
				  valor_quilo: 9,
				  forma_pagamento: 'cartão de débito',
				  createdAt: new Date(),
				  updatedAt: new Date()		
			  }
  
		  ], {})
	},
  
	down: (queryInterface, Sequelize) => {
		  return queryInterface.bulkDelete('Compras', null, {})
	}
  }
  