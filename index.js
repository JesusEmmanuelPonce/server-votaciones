const express = require('express')
const path = require('path')
require('dotenv').config()

// Express
const app = express()

// Socket io
const http = require('http').createServer(app)
module.exports.io = require('socket.io')(http)
require('./sockets/socket')

// Path public
const publicPath = path.resolve( __dirname, 'public' )
app.use( express.static(publicPath) )

http.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.PORT}`)
})