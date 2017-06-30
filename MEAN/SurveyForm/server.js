var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
});

app.post('/result', function(request, response){
    if(request.body.name.length != 0){
        var user_obj = {
            name: request.body.name,
            location: request.body.location,
            comment: request.body.comment,
            language: request.body.language
        };
        response.render('result', {user_obj: user_obj});
    }
    else{
        response.redirect('/');
    }
});

app.listen(8000, function(){
    console.log('listening on port 8000');
});
