import WebSocket = require('ws');

const ws = new WebSocket('ws:/localhost:7070');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(data);
});