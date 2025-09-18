import { createRequire } from 'module'
import path from 'path';

const require = createRequire(import.meta.url);
const __dirname = path.resolve();
const express = require("express");
const app = express();

//const { WebSocketServer } = require('ws');
const [salas, setSalas] = useState([{}])
const [idSessao, setIdSessao] = useState(0)

// const server = new WebSocketServer({
//   port: 5000,
//   perMessageDeflate: {
//     zlibDeflateOptions: {
//       // See zlib defaults.
//       chunkSize: 1024,
//       memLevel: 7,
//       level: 3
//     },
//     zlibInflateOptions: {
//       chunkSize: 10 * 1024
//     },
//     // Other options settable:
//     clientNoContextTakeover: true, // Defaults to negotiated value.
//     serverNoContextTakeover: true, // Defaults to negotiated value.
//     serverMaxWindowBits: 10, // Defaults to negotiated value.
//     // Below options specified as default values.
//     concurrencyLimit: 10, // Limits zlib concurrency for perf.
//     threshold: 1024 // Size (in bytes) below which messages
//     // should not be compressed if context takeover is disabled.
//   }
// });
//const server = new WebSocketServer('ws://localhost:5000');

    // server.on('connection', function connection(ws, req) {
    //   ws.on('error', console.error);
    //   const ip = req.socket.remoteAddress;
    //   ws.on('message', function message(data) {
    //     console.log(server.clients)
    //     server.clients.forEach(function each(client) {
           
    //             console.log('received: %s', data);
    //            // ws.send("User "+ip+" :"+ data);
    //           client.send("User "+ip+" :"+ data);
            
    //       });
       
    //   });
    
    //   //ws.send("Bem vindo");
    // });


// serve your css as static
app.use(express.static(__dirname));
app.use((req, res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})

app.listen(3000, () => {
});

app.get("/animal-ride", (req, res) => {
  res.sendFile(__dirname+"/main.html");
});

app.get("/ranking", (req, res) => {
  res.sendFile(__dirname+"/ranking.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname+"/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname+"/login.html");
});



