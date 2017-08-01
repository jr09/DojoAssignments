const Player = require('mongoose').model('Player');

module.exports = {
    getAllPlayersDescending(request, response){
        Player.find({}).sort({score:-1}).exec(function(error, players){
            if(error){
                console.log(error);
            }
            else{
                response.json(players);
            }
        })
    },
    createPlayer(request, response){
        const player = new Player(request.body);
        console.log('Created new player', player);
        player.save()
        .then(function(player){
            console.log('Saved player', player);
        })
        .catch(function(error){
            console.log(error);
        })
    }
};