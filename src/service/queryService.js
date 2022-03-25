const queryRepository = require('../repository/queryRepository')
const spoonacularGateway = require('../gateway/spoonacularGateway')

async function getQueries(userEmail) {
    return queryRepository.getQueries(userEmail);
}

async function getRecipesAndRegisterQuery(userEmail, recipeName) {
    const foundRecipes = await spoonacularGateway.getRecipes(recipeName)
    const query = { userEmail, recipeName, foundRecipes }
    queryRepository.registerQuery(query)
    return foundRecipes
}

module.exports = {
    getQueries,
    getRecipesAndRegisterQuery
}
