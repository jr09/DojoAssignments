function swap(obj){
    var temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;
}

function shuffle(arr){
    var curr_index = arr.length - 1;
    var rand_index = 0;
    var temp = 0;

    while(curr_index != 0){
        rand_index = Math.floor(Math.random() * curr_index);
        temp = arr[rand_index];
        arr[rand_index] = arr[curr_index];
        arr[curr_index] = temp;
        curr_index -= 1;
    }
    return arr;
}

// **************************************************************************************************

function generateDeck(){
    var arr = [];
    for(let idx = 0; idx < 52; idx++){
        arr.push(idx);
    }
    return arr;
}

function DeckConstructor(){
    this.cards = generateDeck();
}

DeckConstructor.prototype.shuffle = function(){
    this.cards = shuffle(this.cards);
}

DeckConstructor.prototype.reset = function(){
    this.cards = generateDeck();
}

DeckConstructor.prototype.deal = function(){
    var rand_card_index = Math.floor(Math.random() * this.cards.length);
    var rand_card = this.cards[rand_card_index];
    this.cards.splice(rand_card_index,1);
    return rand_card;
}

DeckConstructor.prototype.num_cards = function(){
    console.log(this.cards.length);
}

// **************************************************************************************************

function Player(name){
    this.name = name;
    this.hand_length = 5; // this can be changed depending on the game
    this.hand = [];
}

Player.prototype.takeCard = function(deck_var){
    if(this.hand.length > this.hand_length && deck_var.cards.length != 0){
        this.hand_length.push(deck_var.deal());
    }
}

Player.prototype.discard = function(card_idx){
    this.hand.splice(card_idx,1);
}

// **************************************************************************************************
