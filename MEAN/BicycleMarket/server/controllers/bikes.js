const Bike = require('mongoose').model('Bike');
const User = require('mongoose').model('User');

module.exports = {
    getAllBikes(request, response){
        Bike.find({})
        .populate('user')
        .exec(function(err, bikes){
            if(err){
                response.json("Error getting bikes")
            }
            else{
                response.json(bikes);
            }
        })
    },
    create(request, response){
        console.log('Received request to create bike in bikes.js');
        User.findOne({_id: request.params.id}, function(err, user){
            if(err){
                response.json("Could not find user");
            }
            else{
                const bike = new Bike(request.body);
                console.log(request.body);
                bike.user = user._id;
                user.bikes.push(bike);
                bike.save(function(err, bike){
                    if(err){
                        response.json("Error saving bike");
                    }
                    else{
                        user.save(function(err){
                            if(err){
                                response.json("Error saving user after saving bike");
                            }
                        })
                    }
                })
            }
        })
    },
    update(request, response){
        Bike.findByIdAndUpdate(request.params.id, request.body, {new: true})
         .then(function(bike){
             console.log('Updated book', bike);
             response.json(bike);
         })
         .catch(function(error){
             console.log(error);
         })
    },
    delete(request, response){
        Bike.findByIdAndRemove(request.params.id)
         .then(function(bike){
             console.log('deleted bike', bike);
             response.json(bike);
         })
         .catch(function(error){
             console.log(eror);
         })
    },
}