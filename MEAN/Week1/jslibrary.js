var _ = {
   map: function(arg1, somefunc) {
       var result;
       if(arg1 instanceof Array){
           result = [];
           for(let idx=0; idx<arg1.length;idx++){
               result.push(somefunc(arg1[idx]));
           }
       }
       else if(arg1 instanceof Object){
           result = [];
           for(var key in arg1){
               result.push(somefunc(arg1[key], key));
           }
       }
       return result;
   },
   reduce: function(arr, somefunc, ref) {
       var result = 0;
       for(let idx=0; idx<arr.length; idx++){
           result += somefunc(0, arr[idx]);
       }
       return result;
   },
   find: function(arr, somefunc) {
       var result= 0;
       for(let idx=0; idx<arr.length; idx++){
           if(somefunc(arr[idx]) == true){
               result = arr[idx];
               return result;
           }
       }
       return undefined;
   },
   filter: function(arr, somefunc) {
       var result_arr = [];
       for(let idx = 0; idx < arr.length; idx++){
           if(somefunc(arr[idx]) == true){
               result_arr.push(arr[idx]);
           }
       }
       return result_arr;
   },
   reject: function(arr, somefunc) {
       var result_arr = [];
       for(let idx = 0; idx < arr.length; idx++){
           if(somefunc(arr[idx]) == false){
               result_arr.push(arr[idx]);
           }
       }
       return result_arr;
   }
 }

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var map1 = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(map1);
var map2 = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
console.log(map2);

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
