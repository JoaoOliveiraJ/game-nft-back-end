const express = require('express')
const Router  = express.Router()

const BetFarmController = require('../../controllers/BetFarm/BetFarmController')

Router.get('/:token/:option/:value', BetFarmController.bet)

module.exports = Router