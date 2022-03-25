const jwt = require('jsonwebtoken')
const { config } = require('./config')
const userRepository = require('./repository/userRepository')

function authenticateToken(req, res, next) {
    const authenticationHeader = req.headers['authorization']
    const token = authenticationHeader && authenticationHeader.split(' ')[1]

    if (!token) res.send(401)

    if (userRepository.isDisabledToken(token)) res.send(403)

    jwt.verify(token, config.access_token_secret, (err, user) => {
        if (err) res.send(403)
        req.user = user
        next()
    })
}

module.exports = {
    authenticateToken
}
