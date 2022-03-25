const userService = require('../service/userService')

async function registerUser(req, res) {
    const { email, password } = req.body
    await userService.registerUser(email, password);
    res.status(201).send()
}

async function login(req, res) {
    const { email, password } = req.body
    try {
        const accessToken = await userService.login(email, password);
        res.status(200).json({ accessToken }).send()   
    } catch (error) {
        res.status(400).json({ error }).send()
    }
}

async function logout(req, res) {
    const authenticationHeader = req.headers['authorization']
    const token = authenticationHeader && authenticationHeader.split(' ')[1]

    await userService.logout(token)
    res.status(200).json('User has been logged out')
}

module.exports = {
    registerUser,
    login,
    logout
}
