const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRouter = require('../middleware/checkRoleMiddleware')
//post создавать бренд get получать все бренды
router.post('/', checkRouter('Admin'), brandController.create )
router.get('/', brandController.getAll)

module.exports = router