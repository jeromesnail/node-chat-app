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
    from: 'Jérôme',
    text: 'This is a message from server to client',
    createdAt: 123456789369
  });

  socket.on('disconnect', () => {
    console.log('user disconnected!');  
  });

  socket.on('createMessage', (message) => {
    console.log(`Message from ${message.from}:`, message.text);    
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);  
})