const {Router} = require('express')
const CompraController = require('../controllers/CompraController')

const router = Router()

router.get('/compras', CompraController.verificarCompras)

router.get('/compras/:id', CompraController.verificaUmaCompra)

router.post('/compras', CompraController.cadastrarCompra)

router.put('/compras/:id', CompraController.atualizaCompra)

router.delete('/compras/:id', CompraController.deletaCompra)

module.exports = router