import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 7070 });

wss.on('connection', (ws) =>
{
  ws.on('message', (message) =>
  {
    console.log('received: %s', message);
  });

  ws.on('close', () =>
  {
    console.log('connection closed');
  });

  ws.send('hello');
});
