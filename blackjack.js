var options = {};

function Hand() {
    console.log('creating players hand');
    this.cards = [];
}

Hand.prototype.total = function () {
    console.log('getting total');
    var score = 0;

    for (var i = 0; i < this.cards.length; i++) {
        score += this.cards[i].value;
    }

    return score;
};

Hand.prototype.bust = function () {
    console.log('is bust');
    return this.total() > 21;
};

Hand.prototype.dealCard = function (card) {
    console.log('dealing card');
    console.log(card);
    this.cards.push(card);
};


function Card(displayValue, suit, value) {
    this.displayValue = displayValue;
    this.suit = suit;
    this.value = value;
}

Card.prototype.isAce = function () {
    if (this.displayValue == 'Ace') {
        return true;
    }

    return false;
};



function DeckGenerator(howManyDecksOfCards) {

    var values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    var deck = [];

    for (var d = 0; d < howManyDecksOfCards; d++) {
        for (var v = 0; v < values.length; v++) {

            for (var s = 0; s < suits.length; s++) {
                deck.push(new Card(values[v], suits[s], v + 1));
            }
        }
    }
    return deck;
}


function Deck() {
    console.log('creating new deck');
    this.deckStack = DeckGenerator(options.howManyDeckOfCards);
}

Deck.prototype.shuffle = function () {
    this.deckStack = shuffle(this.deckStack);
};

Deck.prototype.getCard = function () {
    var card = this.deckStack.pop();
    console.log('Getting card from deck');
    console.log(card);
    console.log('Dealer has remaining cards: ' + this.deckStack.length);
    return card;
};

exports.Game = function (opts) {
    console.log('creating game');
    options = opts;

    this.deck = new Deck();
    this.playersHand = new Hand();
    this.dealersHand = new Hand();
}


shuffle = function (o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};



