const express = require('express')
const Router  = express.Router()

const BuyNftController = require('../../controllers/BuyNft/BuyNftBoxThreeController')

Router.get('/:address', BuyNftController.buy)

module.exports = Router