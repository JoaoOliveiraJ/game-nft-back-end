const knex  = require('../../db/knex')

async function showUser (addressUser)
{

    try 
    {
        return knex('user').select('*').where('address', addressUser)

    } catch (error) 
    {
        return error
    }

    
}

async function showPrices ()
{

    try 
    {
        return knex('prices').select('*').first()

    } catch (error) 
    {
        return error
    }

    
}

async function showNftStatus ()
{

    try 
    {
        return knex('nft_status').select('*')

    } catch (error) 
    {
        return error
    }

    
}


async function insertNftUser(addressUser, starUser, roundsNft, damageNft, day_buyNft, day_renewNft ) 
{
    return knex('nft').insert({
        owner:  addressUser, star: starUser, rounds: roundsNft, damage: damageNft, day_buy: day_buyNft, day_renew: day_renewNft
    })
}

async function updateBalanceUser(addressUser, balanceAtual)
{
    return knex('user').update({
        balance_token: balanceAtual
    }).where('address', addressUser)
}

exports.buy = async (req, res) => 
{

    let userAddresFront = req.params.address
    
    let showUserDB             = await showUser(userAddresFront)
    let pricesNft              = await showPrices()
    let showNftStatusDB        = await showNftStatus()

    let shipsPrice             = pricesNft.box_one
    let fuelPrice              = pricesNft.fuel
    let damagePrice            = pricesNft.damage
    let renewPrice             = pricesNft.renew_price

    let StarOneNftStatusDB     = showNftStatusDB[0]
    let StarTwoNftStatusDB     = showNftStatusDB[1]
    let StarThreeNftStatusDB   = showNftStatusDB[2]
    let StarFourNftStatusDB    = showNftStatusDB[3]

    const ships_porcent = [
        { ships_star: 1, porcent: 70 },
        { ships_star: 2, porcent: 25 },
        { ships_star: 3, porcent: 5 },
    ]
    
    const naves_map            = ships_porcent.flatMap(ships => Array(ships.porcent).fill(ships))

    const win                  = naves_map[Math.floor(Math.random() * naves_map.length)]


    console.log(showUserDB[0].balance_token)

    let shipsStars             = win.ships_star

    let balanceUserDB          = showUserDB[0].balance_token


    let StarOneStatusRare      = StarOneNftStatusDB.star
    let StarOneStatusRounds    = StarOneNftStatusDB.rounds
    let StarOneStatusDamage    = StarOneNftStatusDB.damage

    let StarTwoStatusRare      = StarTwoNftStatusDB.star
    let StarTwoStatusRounds    = StarTwoNftStatusDB.rounds
    let StarTwoStatusDamage    = StarTwoNftStatusDB.damage

    let StarThreeStatusRare    = StarThreeNftStatusDB.star
    let StarThreeStatusRounds  = StarThreeNftStatusDB.rounds
    let StarThreeStatusDamage  = StarThreeNftStatusDB.damage

    if(showUserDB.length > 0)
    {
       if (balanceUserDB >= shipsPrice) {
           switch (shipsStars) {
            case 1:
                let insertnft = await insertNftUser(userAddresFront, StarOneStatusRare, StarOneStatusRounds, StarOneStatusDamage, 1, 45 )
                balanceUserDB = balanceUserDB - shipsPrice
                await updateBalanceUser(userAddresFront, balanceUserDB)

                res.json({
                    id: insertnft[0],
                    rare: StarOneStatusRare,
                    rounds: StarOneStatusRounds,
                    Damage: StarOneStatusDamage,
                    lifetime: 45,
                    balance: balanceUserDB
                })
                break;
            case 2:
                let insertnft2 = await insertNftUser(userAddresFront, StarTwoStatusRare, StarTwoStatusRounds, StarTwoStatusDamage, 1, 45 )
                balanceUserDB = balanceUserDB - shipsPrice

                await updateBalanceUser(userAddresFront, balanceUserDB)

                res.json({
                    id: insertnft2[0],
                    rare: StarTwoStatusRare,
                    rounds: StarTwoStatusRounds,
                    Damage: StarTwoStatusDamage,
                    lifetime: 45,
                    balance: balanceUserDB
                })
                break;
            case 3: 
                let insertnft3 = await insertNftUser(userAddresFront, StarThreeStatusRare, StarThreeStatusRounds, StarThreeStatusDamage, 1, 45 )
                balanceUserDB = balanceUserDB - shipsPrice

                await updateBalanceUser(userAddresFront, balanceUserDB)

                res.json({
                    id: insertnft3[0],
                    rare: StarThreeStatusRare,
                    rounds: StarThreeStatusRounds,
                    Damage: StarThreeStatusDamage,
                    lifetime: 45,
                    balance: balanceUserDB
                })
                break
            default:
                break;
        }
       }
       else 
       {
           res.json({
               message: 'Balance is small'
           })
       }
    }
    else 
    {
        res.json({
            message: 'User no exist'
        })
    }

}