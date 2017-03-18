var HOUR = 8;
var MINUTE = 30;
var PERIOD = "AM";

function saytime(){
    if(MINUTE === 0){
        console.log('It is exactly ' + HOUR + morneve());
    }
    else if ((MINUTE > 0) && (MINUTE <= 30)) {
        console.log('It is just after ' + HOUR + morneve());
    }
    else{
        console.log('It is almost ' + HOUR + morneve());
    }
}

function morneve(){
    if(PERIOD === "AM") return ' in the morning';
    else return ' in the evening';
}

saytime();
