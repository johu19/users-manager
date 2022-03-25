const { config } = require('../config')
const axios = require('axios')

async function getRecipes(recipeName) {
    const url = `${config.spoonacular_api_base_path}/recipes/complexSearch?apiKey=${config.spoonacular_api_key}&number=5&query=${recipeName}`;
    const headers = { 'Content-Type': 'application/json' }

    let foundRecipes = [];

    await axios.get(url, { headers }).then((result, err) => {
        if (err) throw 'Error fetching recipes'
        console.log(result.data)
        foundRecipes = result.data.results
    })

    return foundRecipes
}

module.exports = {
    getRecipes
}
