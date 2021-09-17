import WebSocket from 'ws';

const wss : WebSocket.Server = new WebSocket.Server({ port: 7070 });

let isPaused = true;

wss.on('connection', (ws) =>
{
  ws.on('message', (message) =>
  {
    isPaused = !isPaused;
    wss.clients.forEach((client) =>
    {
  
      if (client !== ws && client.readyState === WebSocket.OPEN) 
      {
        let message = isPaused ? 'paused' : 'playing';
        console.log('sending message to clients (that didnt trigger the event): ', message);
        client.send(message);
      };
    });
  });

  ws.on('close', () =>
  {
    console.log('connection closed');
  });

  console.log('connection open');
 // ws.send('hello');
});

console.log('Awaiting connections');