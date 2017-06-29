// add all required packages

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

// start listening on local host

var server = app.listen(8000, function(){
    console.log('Listening on port 8000 of local host!:)');
});

var io = require('socket.io').listen(server);

// create array of users

var users = [];

// create dictionary of users for checking duplicate user names

var users_dictionary = {};

// create array of chats

var chats = [];

io.sockets.on('connection', function(socket){
    console.log('We are using sockets!');
    console.log(socket.id);

// add new user to array and dictionary, emit to all active users the new user

    socket.on('users_new_user', function(data){
        users.push(data.name);
        users_dictionary[data.name] = data.name;
        print_users();
        socket.emit('users_all_users', {users: users});
        socket.emit('all_messages', {messages: chats});
        socket.broadcast.emit('users_add_user', {new_user: data.name});
    });

// on disconnect, emit the user name to be removed to all active users

    socket.on('disconnect_user', function(data){
        console.log(`Request  to remove ${data.name}`);
        var name_index = users.indexOf(data.name);
        users.splice(name_index, 1);
        delete users_dictionary[data.name];
        print_users();
        socket.broadcast.emit('users_remove_user', {remove_user: data.name});
    });

// handle user name checking, if user name already taken send false else true

    socket.on('check_user_name', function(data){
        console.log(`Request to check availability of ${data.name} received!!`);
        print_users();
        if(users_dictionary[data.name]){
            socket.emit('user_name_validity', {result: false});
        }
        else{
            socket.emit('user_name_validity', {result: true});
        }
    });

// handle message received from active user, send to all active users

    socket.on('message_from_user', function(data){
        console.log(`Received ${data.message} from user ${data.name}`);
        chats.push(data.message);
        io.emit('new_message', {message: data.message});
    });
});


function print_users(){
    console.log(users);
    console.log(users_dictionary);
}
