const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)

const io = socketio(server)


//const __dirname = path.resolve()
const directory = path.join(__dirname, '../public')

app.use(express.static(directory))

io.on('connection', () => {
  console.log('New websocket connection')
})

server.listen(
  3000,
  console.log(
    `Server running on port 3000`
  )
);