const express = require('express')
const router = express.Router()

const { login,dashboard } = require('../controllers/main')
const authenticationMiddleware = require('../middlewares/auth')

router.post('/login',login )
router.get('/dashboard',authenticationMiddleware ,dashboard )

module.exports = router