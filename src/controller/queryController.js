const queryService = require('../service/queryService')

async function getRestaurants(req, res) {
    const { user } = req
    const { city } = req.body
    const foundRestaurants = await queryService.getRestaurantsAndRegisterQuery(user.email, city)

    res.status(200).json(foundRestaurants)
}

async function getQueries(req, res) {
    const { userEmail } = req.query
    const queries = await queryService.getQueries(userEmail)

    res.status(200).json(queries)
}

module.exports = {
    getRestaurants,
    getQueries
}
