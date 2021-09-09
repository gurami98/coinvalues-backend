const express = require('express')
const controllers = require('../controllers/coinvaluesControllers')
const router = express.Router()

const {getCoins, getCurrentCoin} = controllers

router.get('/get-all', getCoins)
router.get('/get-coin/:symbol', getCurrentCoin)
module.exports = router