const queryRepository = require('../repository/queryRepository')

async function getQueries(userEmail) {
    return queryRepository.getQueries(userEmail);
}

async function getRestaurantsAndRegisterQuery(userEmail, city) {
    const foundRestaurants = ['Apollo', 'PizzaR']
    const query = { userEmail, city, foundRestaurants }
    queryRepository.registerQuery(query)
    return foundRestaurants
}

module.exports = {
    getQueries,
    getRestaurantsAndRegisterQuery
}
