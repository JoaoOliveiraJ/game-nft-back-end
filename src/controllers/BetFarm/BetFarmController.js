const knex = require('../../db/knex')


async function userDB (token)
{
    return knex('user').select('*').where('token_acess', token)
}

async function updateBalance(addressUser, balance_bet, option_money, time)
{
    if (option_money === 'token')
    {
        return knex('user').update({
            balance_token: balance_bet
        }).where('address', addressUser)
    }
    else if (option_money === 'usd')
    {
        return knex('user').update({
            balance_token: balance_bet
        }).where('address', addressUser)
    }
    else
    {
        return knex('logs_bet_farm').insert({
            address_error: addressUser,
            message: 'Problem updating bets in the database.',
            time_error: time

        })
    }    
}

async function insertBetFarm (addressUser, token_bet, usd_bet, status_win, time, option_bet)
{
    if (option_bet === 'token') 
    {
        return knex('bet_farm').insert({
            owner_bet: addressUser,
            amount_bet_token: token_bet,
            amount_bet_usdt: usd_bet,
            status: status_win,
            time_entry: time
        })
    }
    else if (option_bet === 'usd') 
    {
        return knex('bet_farm').insert({
            owner_bet: addressUser,
            amount_bet_token: token_bet,
            amount_bet_usdt: usd_bet,
            status: status_win,
            time_entry: time
        })
    }
    else
    {
        return knex('logs_bet_farm').insert({
            address_error: addressUser,
            message: 'Problem using system bets in the database.',
            time_error: time

        })
    }
}

exports.bet = async (req, res) => 
{

    let tokenAcessFront = req.params.token
    let optionBetApost  = req.params.option

    let valueBetApost   = parseInt(req.params.value)


    let userDBVar       = await userDB(tokenAcessFront)

    let addressUserDB   = userDBVar[0].address


    const bet_porcent = [
        { bet_farm: 'win', porcent: 38 }, // win
        { bet_farm: 'loss', porcent: 68 }, // loss
        { bet_farm: '10', porcent: 3 }, // x3 win
    ]
    
    const bet_map              = bet_porcent.flatMap(bet => Array(bet.porcent).fill(bet))

    const win                  = bet_map[Math.floor(Math.random() * bet_map.length)]

    let dateNow = new Date

    let dataFormat   = dateNow.getUTCDate() 
    let monthFormat  = dateNow.getUTCMonth()+1
    let hoursFormat  = dateNow.getUTCHours()
    let minuteFormat = dateNow.getUTCMinutes()

    let mesFormat    = monthFormat < 10 ? '0' + monthFormat : monthFormat
    
    let allTime = mesFormat +  ':' + dataFormat  + 'T' + hoursFormat + ':' + minuteFormat


    console.log(win.bet_farm)

    if (userDBVar.length > 0 )
    {

        let balanceUserDBToken = userDBVar[0].balance_token
        let balanceUserDBUsdt  = userDBVar[0].balance_usdt

        if (optionBetApost === 'token') 
        {
            if (balanceUserDBToken >= valueBetApost ) 
            {
                switch (win.bet_farm)
                {
                    // code: 500 para win, 550 para win 3x, 580 para loss

                    case 'win':

                        await insertBetFarm(addressUserDB, valueBetApost, 0, 'WIN', allTime, 'token')

                        valueBetApost = valueBetApost * 2

                        balanceUserDBToken = balanceUserDBToken + valueBetApost

                        console.log(balanceUserDBToken)

                        await updateBalance(addressUserDB, balanceUserDBToken, 'token', allTime)

                        res.json({
                            value: valueBetApost,
                            code: 500
                        })
                    
                        break;
                    case 'loss':
                        await insertBetFarm(addressUserDB, valueBetApost, 0, 'LOSS', allTime, 'token')

                        balanceUserDBToken = balanceUserDBToken - valueBetApost

                        console.log(balanceUserDBToken)

                        await updateBalance(addressUserDB, balanceUserDBToken, 'token', allTime)

                        res.json({
                            value: 0,
                            code: 580
                        })

                        break;

                    case '10':

                        await insertBetFarm(addressUserDB, valueBetApost, 0, 'WIN 3X', allTime, 'token')

                        valueBetApost = valueBetApost * 10

                        balanceUserDBToken = balanceUserDBToken + valueBetApost

                        console.log(balanceUserDBToken)

                        await updateBalance(addressUserDB, balanceUserDBToken, 'token', allTime)

                        res.json({
                            value: valueBetApost,
                            code: 550
                        })

                        break
                    default:
                        break;
                }
            }
            else
            {
                res.json({
                    message: 'Balance Small'
                })
            }
        }
        else if (optionBetApost === 'usd')
        {
            if (balanceUserDBUsdt >= valueBetApost)
            {
                switch (win.bet_farm)
                {
                    case 'win':

                        await insertBetFarm(addressUserDB, valueBetApost, 0, 'WIN', allTime, 'token')

                        valueBetApost = valueBetApost * 2

                        balanceUserDBUsdt = balanceUserDBUsdt + valueBetApost

                        console.log(balanceUserDBUsdt)

                        await updateBalance(addressUserDB, balanceUserDBUsdt, 'usd', allTime)

                        res.json({
                            value: valueBetApost,
                            code: 500
                        })
                        
                        break;
                    case 'loss':

                        await insertBetFarm(addressUserDB, valueBetApost, 0, 'LOSS', allTime, 'usd')

                        balanceUserDBUsdt = balanceUserDBUsdt - valueBetApost

                        console.log(balanceUserDBUsdt)

                        await updateBalance(addressUserDB, balanceUserDBUsdt, 'usd', allTime)

                        res.json({
                            value: 0,
                            code: 580
                        })

                        break;

                    case '10':

                        await insertBetFarm(addressUserDB, valueBetApost, 0, 'WIN 3X', allTime, 'usd')

                        valueBetApost = valueBetApost * 10

                        balanceUserDBUsdt = balanceUserDBUsdt + valueBetApost

                        console.log(balanceUserDBUsdt)

                        await updateBalance(addressUserDB, balanceUserDBUsdt, 'usd', allTime)

                        res.json({
                            value: valueBetApost,
                            code: 550
                        })

                        break
                    default:
                        break;
                }
            }
            else
            {
                res.json({
                    code: 600,
                    message: 'Balance Small'
                })
            }

            
        }
        else
        {
            res.json({
                message: 'Option invalid'
            })
        }

        
    }

}