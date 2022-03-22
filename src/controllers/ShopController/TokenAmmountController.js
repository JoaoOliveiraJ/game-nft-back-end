let knex = require('../../db/knex')


async function showUser (token)
{
    return knex('user').select('*').where('token_acess', token)
}

async function showInventory(address)
{
    return knex('inventory').select('*').where('owner', address)
}

exports.ammount = async (req, res) => 
{
    let token_acess        = req.params.token

    let userDB             = await showUser(token_acess)

    let addressUser        = userDB[0].address

    let showInventoryBombs = await showInventory(addressUser)

    let token_amount       = userDB[0].balance_token

    let bombs_amount       = showInventoryBombs[0].bombs

    res.json({
        total: `Token: ${token_amount}`,
        bombs: bombs_amount
    })
}