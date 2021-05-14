const app = require('./app');
const port = 3000;
const frontend_url = "http://localhost:4200";
var cors = require('cors')

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
    cors: {
        origin: frontend_url,
        methods:["GET","POST"],
        credentials:true
    }
});

app.use(cors())

io.on('connection',(socket)=>{
    console.log('A user connected');

    socket.on('chat message', (message) => {
        io.emit('chat message', message);
        console.log(message);
    });
})

app.get('/',(req,res) => {
    res.send("Express server is running.");
})

server.listen(port, () => {
  console.log('Server is listening on port ' + port);
});
