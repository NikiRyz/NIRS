const Router = require('express')
const router = new Router()
const usersController = require('../controllers/usersController')


router.post('/registration', usersController.registration)
router.get('/users', usersController.getUsers)

module.exports = router