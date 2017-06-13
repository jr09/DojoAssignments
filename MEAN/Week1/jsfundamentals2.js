// function sumXY(x,y){
//     var sum=0;
//     for(let idx=x; idx<=y;idx++){
//         sum += idx;
//     }
//     console.log('Sum = ' + sum)
// }
// sumXY(1,10);

// function minarr(arr){
//     var min_value = 0;
//     for(let idx=1; idx++; idx<arr.length){
//         if(arr[idx] < min_value){
//             min_value = arr[idx];
//         }
//     }
//     return min_value;
// }
//
// function avgarr(arr){
//     var sum=0;
//     for(let idx=0; idx<arr.length;idx++){
//         sum += arr[idx];
//     }
//     return sum/arr.length;
// }

var sumxy = function(x,y){
    var sum=0;
    for(let idx=x; idx<=y;idx++){
        sum += idx;
    }
    console.log('Sum = ' + sum)
}

var minarr = function(arr){
    var min_value = arr[0];
    for(let idx=1;idx<arr.length;idx++){
        if(arr[idx] < min_value){
            min_value = arr[idx];
        }
    }
    return min_value;
}

var avgarr = function(arr){
    var sum=0;
    for(let idx=0; idx<arr.length;idx++){
        sum += arr[idx];
    }
    return sum/arr.length;
}

var person = {
    name:'Jivesh',
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

person.say_name();
person.say_something('im cool');
person.walk();
person.run();
person.crawl();
