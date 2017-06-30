module.exports = function(){
    return {
        add: function(num1, num2){
            if(!num1 && !num2){
                return 0;
            }
            else if(!num2){
                return num1;
            }
            else{
                return num1+num2;
            }
        },
        multiply: function(num1, num2){
            if(!num1 || !num2){
                return 0;
            }
            else{
                return num1*num2;
            }
        },
        square: function(num1){
            if(!num1){
                return 0;
            }
            else{
                return Math.pow(num1, 2);
            }
        },
        random: function(num1, num2){
            if(!num1 && !num2){
                return 0;
            }
            else if(!num2){
                return Math.floor(Math.random()*num1);
            }
            else{
                return Math.floor(Math.random()*num2+num1);
            }
        }
    };
};
