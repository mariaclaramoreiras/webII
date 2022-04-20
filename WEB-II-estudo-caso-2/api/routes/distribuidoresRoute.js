const {Router} = require('express')
const DistribuidorController = require('../controllers/DistribuidorController')

const router = Router()

router.get('/distribuidores', DistribuidorController.verificarDistribuidores)

router.get('/distribuidores/:id', DistribuidorController.verificaUmDistribuidor)

router.post('/distribuidores', DistribuidorController.cadastrarDistribuidor)

router.put('/distribuidores/:id', DistribuidorController.atualizaDistribuidor)

router.delete('/distribuidores/:id', DistribuidorController.deletaDistribuidor)

module.exports = router