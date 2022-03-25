const userRepository = require('../repository/userRepository')
const bcrypt = require('bcrypt')
const { config } = require('../config')
const jwt = require('jsonwebtoken')

async function registerUser(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = { email, password: hashedPassword }
    userRepository.registerUser(user)
}

async function login(email, password) {
    const user = userRepository.getUser(email)
    if (!user) throw `User: ${email} not found`
    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if (isCorrectPassword) {
        const accessToken = jwt.sign(user, config.access_token_secret)
        return accessToken
    }
}

async function logout(token) {
    userRepository.disableToken(token)
}

module.exports = {
    registerUser,
    login,
    logout
}
