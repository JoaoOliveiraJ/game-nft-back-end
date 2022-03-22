const express = require('express')
const app     = express()
const cors    = require('cors')

app.use(cors())
app.use(express.json())

// routes

const RegisterUserRoutes     = require('./routes/RegisterUser/RegisterUserRoutes')
const ShowUserRoutes         = require('./routes/ShowUser/ShowUserRoutes')
const BuyNftOneRoutes        = require('./routes/BuyNft/BuyNftBoxOneRoutes')
const BuyNftTwoRoutes        = require('./routes/BuyNft/BuyNftBoxTwoRoutes')
const BuyNftThreeRoutes      = require('./routes/BuyNft/BuyNftBoxThreeRoutes')
const SelectNftRoutes        = require('./routes/SelectNft/SelectNftRoutes')
const SelectIdFrontRoutes    = require('./routes/SelectNft/SelectNftIdRoutes')
const FixRoundsRoutes        = require('./routes/FixShips/FixRoundsController')
const AcessTokenRoutes       = require('./routes/AcessToken/AcessTokenRoutes')
const SelectNavRoutes        = require('./routes/AcessToken/SelectNavRoutes/SelectNavRoutes')
const IndexRoute             = require('./routes/Index/IndexRoute')
const ShopRoutes             = require('./routes/ShopController/ShopRoutes')
const ScoreRoutes            = require('./routes/Score/ScoreRoutes')
const ScoreTimeRoutes        = require('./routes/Score/ScoreTime/ScoreTimeRoutes')
const ScorePlayerRoutes      = require('./routes/Score/ScorePlayer/ScorePlayer')
const InventoryBombRoutes    = require('./routes/Inventory/InventoryBomb/InventoryBombRoutes')
const InventoryBombUseRoutes = require('./routes/Inventory/InventoryBomb/InventoryBombUseRoutes')
const AmmountTokenRoutes     = require('./routes/ShopController/TokenAmmountRoutes')
const BetFarmRoutes          = require('./routes/BetFarm/BetFarmRoutes')

app.use('/', IndexRoute)
app.use('/register', RegisterUserRoutes)
app.use('/user', ShowUserRoutes)
app.use('/onebuy', BuyNftOneRoutes)
app.use('/twobuy', BuyNftTwoRoutes)
app.use('/threebuy', BuyNftThreeRoutes)
app.use('/show', SelectNftRoutes)
app.use('/selectid', SelectIdFrontRoutes)
app.use('/rounds', FixRoundsRoutes)
app.use('/token', AcessTokenRoutes)
app.use('/token/select', SelectNavRoutes)
app.use('/shop', ShopRoutes)
app.use('/score', ScoreRoutes)
app.use('/score/time', ScoreTimeRoutes)
app.use('/score/time/rewards', ScorePlayerRoutes)
app.use('/inventory/', InventoryBombRoutes)
app.use('/inventory/use/', InventoryBombUseRoutes)
app.use('/money/', AmmountTokenRoutes)
app.use('/bet/', BetFarmRoutes)
//

module.exports = app