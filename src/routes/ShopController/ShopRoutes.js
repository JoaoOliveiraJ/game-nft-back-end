const express = require('express')
const Router  = express.Router()

const ShopController = require('../../controllers/ShopController/ShopController')

Router.get('/:token/:item', ShopController.shop)

module.exports = Router