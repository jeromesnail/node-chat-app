var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server!');
});

socket.on('newMessage', (message) => {
  console.log(`Message from ${message.from}:`, message.text);  
});

socket.emit('createMessage', {
  from: 'Jérôme too',
  text: 'this is a message from client to server'
});