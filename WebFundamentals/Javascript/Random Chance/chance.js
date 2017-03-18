var user_quarters = 30;

console.log(playgame(user_quarters));

function playgame(quarters){
    quarters -= 1;

    var won = false;
    var chance = Math.floor(Math.random()*(100 -1) + 1);
    if(chance == 1){
        won = true;
    }

    if(won){
        quarters += Math.floor(Math.random()*(100-50)+50);
    }

    return quarters;
}
