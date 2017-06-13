function VehicleConstructor(name, num_wheels, num_passengers, speed_mph){
    var _distance_travelled = 0;
    var _vin = 0;
    var _updistancetravelled = function(){
        _distance_travelled += speed_mph;
        return true;
    }
    this.generatevin = function(){
        _vin = Math.floor(Math.Random()*900000 + 100000);
    }
    this.name = name;
    this.num_wheels = num_wheels;
    this.num_passengers = num_passengers;
    this.speed = speed_mph;
    // this.noise = function(){
    //     console.log('Brrrrrrrrr');
    // }
    this.move = function(){
        _updistancetravelled();
        this.noise();
    }
    this.check_miles = function(){
        console.log(_distance_travelled);
        return true;
    }
}

VehicleConstructor.prototype.noise = function(){
    if(this.name == 'Bike'){
        console.log('Ring Ring');
    }
    else if(this.name == 'Sedan'){
        console.log('honk honk');
    }
    else if(this.name == 'Bus'){
        console.log('Brrrr')
    }
    return this;
}

VehicleConstructor.prototype.show_miles = function(){
    this.check_miles();
    return this;
}

VehicleConstructor.prototype.moveIt = function(){
    this.move();
    return this;
}

VehicleConstructor.prototype.getvin = function(){
    this.generatevin()
    return this;
}

var bike = new VehicleConstructor('Bike', 2, 0, 70);
// bike.noise = function(){
//     console.log('ring ring');
// }

var sedan = new VehicleConstructor('Sedan', 4, 0, 60);
// sedan.noise = function(){
//     console.log('honk honk')
// }

var bus = new VehicleConstructor('Bus', 8, 0,40);
bus.addpassenger = function(add_passengers){
    bus.num_passengers += add_passengers;
}

// bike.noise();
// sedan.noise();
// bus.noise();
// bus.addpassenger();

bike.move();

bike.show_miles();
