var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');

var PostSchema = new mongoose.Schema({
    name: {type: String, required: true, trimmed: true},
    post_text: {type: String, required: true, trimmed: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var CommentSchema = new mongoose.Schema({
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    name : {type: String, required: true, trimmed: true},
    comment_text: {type: String, required: true, trimmed: true},
});

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/', function(request, response){
    Post.find()
    .populate('comments')
    .exec(function(err, posts){
        console.log(posts);
        console.log('im here');
        posts.reverse();
        response.render('index', {posts});
    });
});

app.post('/post_message', function(request, response){
    var post = new Post({name: request.body.name, post_text: request.body.post_text});
    post.save(function(err, post){
        if(err){
            console.log('Oops, something went wrong!');
        }
        else{
            console.log(`${post} was saved successfully!`);
        }
    });
    response.redirect('/');
});

app.post('/addcomment/:post_id', function(request, response){
    console.log(`Received new comment for ${request.params.post_id}`);
    Post.findOne({_id: request.params.post_id}, function(err, post){
        if(err){
            console.log('Error: Could not find the post');
        }
        else{
            var comment = new Comment({name: request.body.name, comment_text: request.body.comment_text});
            comment._post = post._id;
            post.comments.push(comment);
            comment.save(function(err, comment){
                post.save(function(err){
                    if(err){
                        console.log('Error saving comment');
                    }
                });
            });
        }
    });
    response.redirect('/');
});

var server = app.listen(8000, function(){
    console.log('Listening on port 8000 of local host!:)');
});
