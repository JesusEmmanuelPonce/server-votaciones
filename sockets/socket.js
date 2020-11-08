const { io } = require('../index')

// Msg socket
io.on('connection', (client) => {
    console.log('Cliente conectado')
    client.on('disconnect', () => {
        console.log('Cliente desconectedo')
    })
    client.on('msg', ( payload ) => {
        console.log(payload)
        io.emit('answer', { answer: 'Received' })
    })
})