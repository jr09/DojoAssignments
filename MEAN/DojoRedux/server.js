var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dateformat = require('dateformat');
var app = express();
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, trimmed: true},
    quote_text: {type: String, required: true, trimmed: true},
    date_string: {type: String},
    upvotes: {type: Number, default: 0}
});

function compare(a, b){
    if(a.upvotes > b.upvotes){
        return 1;
    }
    if(a.upvotes < b.upvotes){
        return -1;
    }
}

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote');

app.get('/', function(request, response){
    response.render('index');
});

app.post('/quotes', function(request, response){
    var quote = new Quote({name: request.body.name, quote_text: request.body.quote_text});
    quote.date_string = dateformat(new Date(), "h:M TT mmmm d yyyy");
    quote.save(function(err){
        if(err){
            console.log('oops someting went wrong');
        }
        else{
            console.log(`${quote} saved successfully!`);
            response.redirect('/');
        }
    });
});

app.get('/showQUotes', function(request, response){
    Quote.find({}, function(err, quotes){
        if(err){
            console.log('Oops! Could not retrive quotes:(');
        }
        else{
            quotes.sort(compare);
            quotes.forEach(function(quote){
                console.log(quote);
            });
            response.render('quotes', {quotes});
        }
    });
});

app.get('/upvote/:quote_id', function(request,response){
    console.log(`I was forced to like ${request.params.quote_id}`);
    Quote.findByIdAndUpdate(request.params.quote_id, {$inc: {upvotes: 1}}, function(err, data){
        if(err){
            console.log('Error updating document!:(');
        }
        else{
            console.log('Updated document successfully!:)');
            response.redirect('/showQUotes');
        }
    });
});

app.get('/cleardb', function(request, response){
    console.log('deleting stuff');
    Quote.remove().exec();
    response.redirect('/showQUotes');
});

var server = app.listen(8000, function(){
    console.log('Listening on port 8000');
});
