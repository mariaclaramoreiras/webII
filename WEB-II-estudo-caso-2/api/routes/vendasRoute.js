const {Router} = require('express')
const VendaController = require('../controllers/VendaController')

const router = Router()

router.get('/vendas', VendaController.verificarVendas)

router.get('/vendas/:id', VendaController.verificaUmaVenda)

router.post('/vendas', VendaController.cadastrarVenda)

router.put('/vendas/:id', VendaController.atualizaVenda)

router.delete('/vendas/:id', VendaController.deletaVenda)

module.exports = router