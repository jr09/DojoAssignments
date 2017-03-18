var arr = [1,'john',3,8,10,'dojo'];
console.log(arr);
console.log(numbersOnly(arr));

function numbersOnly(arr){
    var new_arr = [];
    for(var idx = 0; idx < arr.length; idx++){
        if(typeof arr[idx] === 'number'){
            new_arr.push(arr[idx]);
        }
    }
    return new_arr;
}
