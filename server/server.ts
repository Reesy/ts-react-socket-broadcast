import WebSocket from 'ws';

const wss : WebSocket.Server = new WebSocket.Server({ port: 7070 });

let booleanState = false;

wss.on('connection', (ws) =>
{
  ws.on('message', (message) =>
  {
     //console.log('received: %s', message);
    booleanState = !booleanState;
    console.log('Internal boolean state is: ' + booleanState);
    // let clientCount = 0;
    wss.clients.forEach((client) =>
    {
  
      if (client !== ws && client.readyState === WebSocket.OPEN) 
      {
        console.log('sending message to server: ');
        client.send(booleanState.toString());
      };
    });
    // clientCount = 0;
  });

  ws.on('close', () =>
  {
    console.log('connection closed');
  });

  console.log('connection open');
 // ws.send('hello');
});

console.log('Awaiting connections');