function runningLogger(){
    console.log('I\'m running!');
}

function multiplyByTen(arg1){
    return arg1 * 10;
}

function stringReturnOne(){
    return 'somestring1';
}

function stringReturnTwo(){
    return 'somestring2';
}

function caller(arg1){
    if(typeof arg1 === "function"){
        console.log(arg1());
    }
}

function myDoubleConsoleLog(arg1, arg2){
    if((typeof arg1 === "function") && (typeof arg2 === "function")){
        console.log(arg1());
        console.log(arg2());
    }
}

function caller2(arg1){
    console.log('string');
    setTimeout(function(){
        if(typeof arg1 === "function"){
            arg1();
        }
        console.log('ending?')
    }, 5000);
    return 'interesting'
}


runningLogger();
console.log(multiplyByTen(5));
console.log(stringReturnOne());
console.log(stringReturnTwo());
var test = function(){
    console.log('Assigning function to variable!');
    return true;
}
caller(test);
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
caller2(myDoubleConsoleLog);
