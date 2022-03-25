require('dotenv').config()

const config = {
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    port: process.env.PORT || 3000,
    spoonacular_api_key: process.env.SPOONACULAR_API_KEY,
    spoonacular_api_base_path: process.env.SPOONACULAR_API_BASE_PATH
}

module.exports = {
    config
}
