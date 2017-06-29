// create use rname and custom prompt message

var user_name = '';
var prompt_message = 'Please enter a user name to continue';

// connect the socket

var socket = io.connect('http://localhost:8000');

// This function requests for a user name

function get_user_name(callback){
    do{
        user_name = prompt(prompt_message);
        prompt_message = 'User name cannot be blank';
    }
    while(!user_name || user_name.trim().length === 0);
    callback();
}

// This function emits to server to check if user name is already taken

function validate_user_name(){
    socket.emit('check_user_name', {name: user_name});
}

$(document).ready(function(){

// For a vlid user name, inform server to add this user else re-prompt valid for user name

    socket.on('user_name_validity', function(data){
        console.log(`Received ${data.result} from server!`);
        if(data.result){
            socket.emit('users_new_user', {name: user_name});
        }
        else{
            prompt_message = 'User name already taken, please enter a different user name';
            get_user_name(validate_user_name);
        }
    });

// add all the active users received from server when page is loaded for the first time

    socket.on('users_all_users', function(data){
        console.log('im here');
        for(let idx=0; idx<data.users.length; idx++){
            $('#users_panel').append('<div class="users" id='+data.users[idx]+'><h3>'+data.users[idx]+'</h3></div>');
        }
    });

// add a new user when nitified by server

    socket.on('users_add_user', function(data){
        $('#users_panel').append('<div class="users" id='+data.new_user+'><h3>'+data.new_user+'</h3></div>');
    });

// remove user from list of active user html when they disconnect

    socket.on('users_remove_user', function(data){
        var remove_name = '#' + data.remove_user;
        console.log(`removing ${remove_name}`);
        $(remove_name).remove();
    });

// notify server the user name who is about to disconnect

    $(window).on('beforeunload', function(){
        if(user_name){
            socket.emit('disconnect_user', {name:user_name});
        }
    });

// when user clicks 'Post' send message string to server

    $('button').click(function(){
        if($.trim($('textarea').val())){
            var message_text = $('textarea').val();
            var message_string = user_name + '  :' + message_text;
            socket.emit('message_from_user', {name: user_name, message: message_string});
            $('textarea').val("");
        }
    });

// get new message from server and update chat

    socket.on('new_message', function(data){
        console.log(`Recieved ${data.message} from server!`);
        $('#chat_panel').append('<p>'+data.message+'</p>');
    });

// when user loads page first time, load all previous chats

    socket.on('all_messages', function(data){
        console.log(`Received all of the old chat from server!`);
        for(let idx = 0; idx < data.messages.length; idx++){
            $('#chat_panel').append('<p>'+data.messages[idx]+'</p>');
        }
    });

    get_user_name(validate_user_name);
});
