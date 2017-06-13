console.log('wasssup');
var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for(var idx=0; idx < x.length; idx++){
    console.log(x[idx]);
}
x.push(100);
x[x.length] = ["hello", "world", "JavaScript is Fun"]
console.log(x);

var sum=0
for(idx = 1; idx <= 500; idx++){
    sum += idx;
}
console.log(sum);

var arr = [1, 5, 90, 25, -3, 0];
var arr_min = arr[0];
for(idx = 1; idx < arr.length; idx++){
    if(arr_min > arr[idx]){
        arr_min = arr[idx];
    }
}
console.log(arr_min);

sum = 0
arr = [1, 5, 90, 25, -3, 0]
for(idx = 0; idx < arr.length; idx++){
    sum += arr[idx];
}
console.log(sum/arr.length);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for(var key in newNinja){
    if(newNinja.hasOwnProperty(key)){
        console.log(key);
        console.log(newNinja[key]);
    }
}
