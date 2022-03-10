const express = require("express");

require('dotenv').config()
const port = process.env.PORT 
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) =>(
    res.send('welcome to my awesome app about breads!')
))

const breadsController = require('./controllers/breads_controllers.js')
app.use(breadsController)

app.listen(port, () => (
console.log('nomming at the port', PORT)
))

