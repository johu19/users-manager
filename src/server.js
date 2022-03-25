const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const healthController = require('./controller/healthController')
const userController = require('./controller/userController')
const queryController = require('./controller/queryController')
const { config } = require('./config')
const { authenticateToken } = require('./authenticationMiddleware')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/ping', healthController.ping) // health route

app.post('/register', userController.registerUser)
app.post('/login', userController.login)
app.put('/logout', authenticateToken, userController.logout)

app.put('/query', authenticateToken, queryController.getRestaurants)
app.get('/query', queryController.getQueries)

 
app.listen(config.port, () => console.log(`app listening on port ${config.port}`))
