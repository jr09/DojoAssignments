var personConstructor = function(name_passed){
    var person = {
        name:name_passed,
        distance_travelled:0,
        say_name:function(){
            alert(this.name + ' says hello!');
            return true;
        },
        say_something: function(string){
            alert(this.name+' says '+string);
        },
        walk: function(){
            this.distance_travelled += 3;
            alert(this.name+' is walking');
        },
        run: function(){
            this.distance_travelled += 10;
            alert(this.name+' is running');
        },
        crawl: function(){
            this.distance_travelled += 1;
            alert(this.name+' is crawling');
        }
    }
    return person;
}

var test = personConstructor('Stark');

// test.say_name();
// test.say_something('im cool');
// test.walk();
// test.run();
// test.crawl();

var ninjaConstructor = function(name_passed){
    var ninja = {
        name: name_passed,
        cohort: 'January',
        belt_level: 'yellow',
        level_up: function(){
            ninja.belt_level = 'black';
        },
        say_name: function(){
            alert(ninja.name+'(belt ='+ninja.belt_level+')'+ ' says hi');
        }
    }
    return ninja;
}

var test = ninjaConstructor('jack')
test.say_name();
test.level_up();
test.say_name();
