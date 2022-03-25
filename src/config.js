require('dotenv').config()

const config = {
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    port: process.env.PORT || 3000
}

module.exports = {
    config
}
