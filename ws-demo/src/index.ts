import {WebSocketServer,WebSocket} from 'ws';

const wss = new WebSocketServer( {port:3000});

wss.on('connection',(ws)=>{
    console.info('new connection join',ws);
    ws.on('message',(data)=>{

        wss.clients.forEach((client=>{
            if (client.readyState === WebSocket.OPEN) {
                client.send(data,{binary:false});
              }
        }))

        console.info('get msg from client',(new String(data)).toString());
    })
 
});

console.log('start success');