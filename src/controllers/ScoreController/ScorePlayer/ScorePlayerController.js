const knex = require('../../../db/knex')

async function selectPlayer (token)
{
    return knex('user').select('*').where('token_acess', token)
}


async function updateBalanceUser (address, newBalance)
{
    return knex('user').update({
        balance_token: newBalance
    }).where('address', address)
}


exports.rewards = async (req, res) => 
{
    let scoreGame = req.params.score
    let tokenGame = req.params.token

    let userDB = await selectPlayer(tokenGame)

    let addressUserDB = userDB[0].address
    let balanceUserDB = userDB[0].balance_token

    console.log(balanceUserDB)

    if (scoreGame >= 50 && scoreGame <= 150) 
    {
         balanceUserDB = balanceUserDB + 10

         await updateBalanceUser(addressUserDB, balanceUserDB)

         res.json({
            rewardsToken: 10
        })
    }
    else if (scoreGame >= 150 && scoreGame <= 300) 
    {
        balanceUserDB = balanceUserDB + 20

        await updateBalanceUser(addressUserDB, balanceUserDB)

        res.json({
            rewardsToken: 20
        })
    }
    else if (scoreGame >= 400) 
    {
        balanceUserDB = balanceUserDB + 50

        await updateBalanceUser(addressUserDB, balanceUserDB)

        res.json({
            rewardsToken: 50
        })
    }
    else
    {
        res.json({
            error: 'Error Score'
        })
    }
}