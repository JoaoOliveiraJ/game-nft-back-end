const knex = require('../../db/knex')

async function selectUserDB (address)
{
    return knex('user').select('*').where('address', address)
}

exports.points = async (req, res) =>
{

}