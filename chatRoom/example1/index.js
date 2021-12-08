/*
 * source:https://itnext.io/build-a-group-chat-app-in-30-lines-using-node-js-15bfe7a2417b
 */ 
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('hi');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  
});


server.listen(8080, () => {
  console.log('listening on *:8080');
});