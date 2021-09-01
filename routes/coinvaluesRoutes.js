const express = require('express')
const controllers = require('../controllers/coinvaluesControllers')
const router = express.Router()

const {getCoins} = controllers

router.get('/get-all', getCoins)
module.exports = router