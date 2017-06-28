var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('users');
});

var server = app.listen(8000, function(){
    console.log('Listening on port 8000 of local host!:)');
});

var io = require('socket.io').listen(server);

var users = [];
var users_dictionary = {};

io.sockets.on('connection', function(socket){
    console.log('We are using sockets!');
    console.log(socket.id);

    socket.on('users_new_user', function(data){
        users.push(data.name);
        users_dictionary[data.name] = data.name;
        console.log(users);
        console.log(users_dictionary);
        socket.emit('users_all_users', {users: users});
        socket.broadcast.emit('users_add_user', {new_user: data.name});
    });

    socket.on('disconnect_user', function(data){
        console.log(`Request  to remove ${data.name}`);
        var name_index = users.indexOf(data.name);
        users.splice(name_index, 1);
        socket.broadcast.emit('users_remove_user', {remove_user: data.name});
    });

    socket.on('check_user_name', function(data){
        console.log(`Request to check availability of ${data.name} received!!`);
        console.log(users_dictionary);
        if(users_dictionary[data.name]){
            socket.emit('user_name_validity', {result: false});
        }
        else{
            socket.emit('user_name_validity', {result: true});
        }
    });
});
