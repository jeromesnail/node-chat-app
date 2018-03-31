const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('new user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined!'));

  socket.on('disconnect', () => {
    console.log('user disconnected!');
  });

  socket.on('createMessage', (message, callback) => {
    console.log(`Message from ${message.from}:`, message.text);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);  
})