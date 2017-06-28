var user_name = '';
var user_name_valid = false;
var prompt_message = 'Please enter a user name to continue';

function get_user_name(){
    while(user_name.length == 0){
        user_name = prompt(prompt_message);
        prompt_message = 'User name cannot be blank';
    }
}

$(document).ready(function(){

    var socket = io.connect();

    socket.on('user_name_validity', function(data){
        alert(`Received ${data.result} from server!`);
        if(data.result == true){
            user_name_valid = true;
        }
        else{
            prompt_message = 'User name already taken, please enter a different user name';
        }
    });

    while(!user_name_valid){
        get_user_name();
        socket.emit('check_user_name', {name:user_name});
    }

    socket.emit('users_new_user', {name: user_name});

    socket.on('user_name_validity', function(data){
        alert(`Received ${data.result} from server!`);
        if(data.result == true){
            user_name_valid = true;
        }
        else{
            prompt_message = 'User name already taken, please enter a different user name';
        }
    });

    socket.on('users_all_users', function(data){
        console.log('im here');
        for(let idx=0; idx<data.users.length; idx++){
            $('body').append('<div class="users" id='+data.users[idx]+'><h3>'+data.users[idx]+'</h3></div>');
        }
    });

    socket.on('users_add_user', function(data){
        $('body').append('<div class="users" id='+data.new_user+'><h3>'+data.new_user+'</h3></div>');
    });

    socket.on('users_remove_user', function(data){
        var remove_name = '#' + data.remove_user;
        console.log(`removing ${remove_name}`);
        $(remove_name).remove();
    });

    $(window).on('beforeunload', function(){
        if(user_name){
            socket.emit('disconnect_user', {name:user_name});
        }
    });
});
