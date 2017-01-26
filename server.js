let express = require("express");
let app = express();

let connections = [];
let users = [];

app.use(express.static('./public'));

let server = app.listen(3000);
let io = require('socket.io').listen(server);
io.on('connection', (socket) => {
    socket.once('disconnect', () => {
        connections.splice(connections.indexOf(socket), 1);
        users = users.filter((user) => {
            return user.id !== socket.id;
        });
        io.emit('disconnect', users);
        socket.disconnect();
        console.log('an user disconnected');
    });
    socket.on('messageAdd', (payload) => {
        let newMessage = {
            timeStamp: payload.timestamp,
            text: payload.text,
            user: payload.user
        };
        io.emit('messageAdd', newMessage);
    });

    socket.on('userJoined', (user) => {
        let newUser = {
            name: user.name,
            id: socket.id
        };
        users.push(newUser);
        io.emit('userJoined', users);
        console.log(user.name + ' Joined');
    });

    connections.push(socket);
});

