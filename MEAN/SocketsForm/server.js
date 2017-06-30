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

app.post('/result', function(request, response){
    response.end();
});

var server = app.listen(8000, function(){
    console.log('Listening on port 8000 of local host!');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('we are using sockets');
    console.log(socket.id);

    socket.on('posting_form', function(data){
        console.log(`Someone clicked a button ${data}`);
        console.log(data.name);
        console.log(data.location);
        console.log(data.language);
        console.log(data.comment);
        var user_obj = {
            name: data.name,
            location: data.location,
            language: data.language,
            comment: data.comment
        }
        socket.emit('updated_message', {response: user_obj});

        socket.emit('random_number', {number: Math.floor(Math.random()*1000+1)});
    });
});
