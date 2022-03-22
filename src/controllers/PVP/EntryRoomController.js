const knex = require('../../')

async function selectUserDB (address)
{
    return knex('user').select('*').where('address', address)
}

async function viewWaitingListDB (address)
{
    return knex('waiting_list').select('*').where('address_waiting', address)
}

async function insertViewWaitingListDB(address, amount_bet, time_entry_now, option_bet)
{
    if (option_bet === 'token') 
    {
        return knex('waiting_list').insert({
            address_waiting: address,
            token_bet: amount_bet,
            time_entry: time_entry_now
        })
    }
    else if (option_bet === 'usd') 
    {
        return knex('waiting_list').insert({
            address_waiting: address,
            usd_bet: amount_bet,
            time_entry: time_entry_now
            })
    }
    else
    {
        return knex('logs_waiting_list').insert({
            address_error: address,
            message: 'User did some malicious action or selected some wrong place in the bet.'
        })
    }
}

async function insertRoomPlayer (play_one, )
{

}

exports.room = async (req, res) =>
{

}