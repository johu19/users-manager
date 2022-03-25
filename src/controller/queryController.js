const queryService = require('../service/queryService')

async function searchRecipes(req, res) {
    const { user } = req
    const { recipeName } = req.body
    const foundRecipes = await queryService.getRecipesAndRegisterQuery(user.email, recipeName)

    res.status(200).json(foundRecipes)
}

async function getQueries(req, res) {
    const { userEmail } = req.query
    const queries = await queryService.getQueries(userEmail)

    res.status(200).json(queries)
}

module.exports = {
    searchRecipes,
    getQueries
}
