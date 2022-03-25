const users = {}
const disabledTokens = []

function registerUser(user) {
    users[user.email] = user
}

function getUsers() {
    return Object.values(users)
}

function getUser(email) {
    return users[email]
}

function disableToken(token) {
    disabledTokens.push(token)
}

function isDisabledToken(token) {
    const foundToken = disabledTokens.filter((t) => t === token)[0]
    return foundToken !== undefined
}

module.exports = {
    registerUser,
    getUsers,
    getUser,
    disableToken,
    isDisabledToken
}
