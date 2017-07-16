var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var dateformat = require('dateformat');
var mongoose = require('mongoose');
var app = express();
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyparser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/mongooses_db');

// define schema here

var LionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    fav_food: {type: String, required: true},
    date_string: {type: Date}
});

mongoose.model('Lion', LionSchema);
var Lion  = mongoose.model('Lion');


// get all the lions
app.get('/' function(request, response){});

// get info of a particular lion, use findbyId()
app.get('/lions/:lion_id' function(request, response){});

// display form to get info of new lion
app.get('/lions/new' function(request, response){});

// action route for above form, use save()
app.post('/lions' function(request, response){});

// show form for editing a particular lion
app.get('/lions/edit/:lion_id' function(request, response){});

// action route for above form, use update()
app.post('/lions/:lion_id' function(request, response){});

// delete a lion document, deleteOne()?
app.post('/lions/destroy/:lion_id');

var server = app.listen(8000, function(){
    console.log('Listening on port 8000 of local host!:)');
});
