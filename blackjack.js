function Card(displayValue, suit, value) {
    this.displayValue;
    this.suit;
    this.value
};


Card.prototype.IsAce(){
    if(this.displayValue == 'Ace'){
        return true;
    }

    return false;
};



function DeckGenerator() {

var values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
var deck = [];

for (var v = 1; v < values.length + 1; v++) {
    
    for (var s = 0; s < suits.length; s++) {
            deck.push(new Card(values[v], suits[s], v);
        }
    }

    return deck;
};


exports.Deck = function(numberOfDecks) {

    var deck = DeckGenerator();
    return deck;

};
