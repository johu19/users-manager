const { config } = require('../config')
const axios = require('axios')

async function getRecipes(recipeName) {
    const url = `${config.spoonacular_api_base_path}/recipes/complexSearch?apiKey${config.spoonacular_api_key}&number=5&query=${recipeName}`;
    const headers = { 'Content-Type': 'application/json' }
    const method = 'GET'

    const result = await axios.request({ url, headers, method })
    console.log(result.data)

    return result.data.results
}

module.exports = {
    getRecipes
}
