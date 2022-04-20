const {Router} = require('express')
const ClienteController = require('../controllers/ClienteController')

const router = Router()

router.get('/clientes', ClienteController.verificarClientes)

router.get('/clientes/:id', ClienteController.verificaUmCliente)

router.post('/clientes', ClienteController.cadastrarCliente)

router.put('/clientes/:id', ClienteController.atualizaCliente)

router.delete('/clientes/:id', ClienteController.deletaCliente)



module.exports = router