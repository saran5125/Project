const express = require('express')
const body = require('body-parser')
const app = express()
const way = require('../routes/contact.js')
app.use(body())
app.use('/contacts',way)
module.exports = app