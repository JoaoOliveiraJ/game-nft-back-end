const knex = require('../../db/knex')


async function showUser (token)
{
    return knex('user').select('*').where('token_acess', token)
}

async function showPrices()
{
    return knex('prices').select('*').first()
}

async function showInventory(address)
{
    return knex('inventory').select('*').where('owner', address)
}

async function updateTicket(address, amount)
{
    return knex('inventory').update({
        ticktes: amount
    }).where('owner', address)
}

async function updateBomb(address, amount)
{
    return knex('inventory').update({
        bombs: amount
    }).where('owner', address)
}

async function updateBalanceUser (address, newBalance) 
{
    return knex('user').update({ 
        balance_token: newBalance
     }).where('address', address)
}

exports.shop = async (req, res) => 
{
    let resultsShop = req.params

    console.log(resultsShop.item)

    let addressUserFront = req.params.token
    let itemUserFront    = req.params.item

    let showUserDB      = await showUser(addressUserFront) 

    let addressDB       = showUserDB[0].address


    let showPricesDB    = await showPrices()
    let showInventoryDB = await showInventory(addressDB)

    let priceBomb      = showPricesDB.bomb

    let balanceUserDB  = showUserDB[0].balance_token

    let amountBombInventory    = showInventoryDB[0].bombs

    console.log(amountBombInventory)
    if (showInventoryDB.length === 1) 
    {

        if (balanceUserDB >= 20) 
        {
            if (itemUserFront === 'bomb') 
            {
                balanceUserDB = balanceUserDB - priceBomb
    
                await updateBalanceUser(addressDB, balanceUserDB)

                console.log(balanceUserDB)

                amountBombInventory = amountBombInventory + 20
                await updateBomb(addressDB, amountBombInventory)

                res.json({
                    Messager: 'Buy 20 Bombs'
                })
            }
            else
            {
                res.json({
                    message: 'Item does not exist'
                })
            }

        }
        else 
        {
            res.json({
                message: 'Balance Small'
            })
        }
        
    }

}