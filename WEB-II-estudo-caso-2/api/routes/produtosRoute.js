const {Router} = require('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = Router()

router.get('/produtos', ProdutoController.verificarProdutos)

router.get('/produtos/:id', ProdutoController.verificaUmProduto)

router.post('/produtos', ProdutoController.cadastrarProduto)

router.put('/produtos/:id', ProdutoController.atualizaProduto)

router.delete('/produtos/:id', ProdutoController.deletaProduto)



module.exports = router