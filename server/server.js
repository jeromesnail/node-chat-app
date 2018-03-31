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
  socket.on('disconnect', () => {
    console.log('user disconnected!');  
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);  
})