const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app!',
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined!',
    createdAt: new Date().getTime()
  });

  socket.on('disconnect', () => {
    console.log('user disconnected!');
  });

  socket.on('createMessage', (message) => {
    console.log(`Message from ${message.from}:`, message.text);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //     text: message.text,
    //     createdAt: new Date().getTime()
    // });
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);  
})