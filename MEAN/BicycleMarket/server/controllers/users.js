const User = require('mongoose').model('User');
const Bike = require('mongoose').model('Bike');

module.exports = {
    login(request, response){
        User.findOne({email: request.body.email})
        .then(user => {
            if(!user) throw new Error();

            return User.validatePassword(request.body.password, user.password)
                .then(() => {
                    completeLogin(request, response, user);
                })
        })
        .catch(error => {
            response.status(401).json('email/password not found')
        })
    },
    register(request, response){
        console.log('Request to register new user', request.body)
        User.create(request.body)
            .then(user => {
                completeLogin(request, response, user)
            })
            .catch(error => {
                console.log(error);
                response.status(422).json(
                    Object.keys(error.errors).map(key => error.errors[key].message)
                );
            });
    },
    logout(request, response){
        request.session.destroy();
        response.clearCookie('userID');
        response.clearCookie('expiration');
        response.json(true);
    },

    index(request, response){
        User.findById(request.params.id, function(err, user){
            if(err){
                console.log(err);
            }
            if(user){
                response.json(user);
            }
        })
    },

    getUserBikes(request, response){
        User.findById(request.params.id)
        .populate('bikes')
        .exec(function(err, user){
            if(err){
                console.log("Error retreiving bikes for user");
                response.json("Error retreiving bikes for user");
            }
            else{
                response.json(user);
            }
        })
    }
};

function completeLogin(request, response, user){
    request.session.user = user.toObject();
    delete request.session.user.password;
    response.cookie('userID', user._id.toString());
    response.cookie('expiration', Date.now()+86400*1000);
    response.json(user);
}