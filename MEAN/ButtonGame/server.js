var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
});

var button_value = 0;

var server = app.listen(8009, function(){
    console.log('Listening on port 8009 of local host');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('We are using sockets');
    console.log(socket.id);

    socket.on('button_clicked', function(data){
        increment_button();
        io.emit('server_result',{button: button_value});
    });

    socket.on('reset_button', function(){
        reset_button();
        io.emit('server_result',{button: button_value});
    });
});

function increment_button(){
    button_value++;
}

function reset_button(){
    button_value = 0;
}
