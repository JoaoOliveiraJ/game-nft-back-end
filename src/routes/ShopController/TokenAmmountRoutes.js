const express = require('express')
const Router  = express.Router()

const AmmountController = require('../../controllers/ShopController/TokenAmmountController')

Router.get('/:token', AmmountController.ammount)

module.exports = Router