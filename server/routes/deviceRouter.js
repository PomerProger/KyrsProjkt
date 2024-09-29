const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRouter = require('../middleware/checkRoleMiddleware')

//post создавать бренд get получать все бренды
router.post('/',checkRouter('Admin'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router