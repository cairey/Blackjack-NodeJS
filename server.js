var http = require('http');
var express = require('express');
var blackjack = require('./blackjack');


var hosting = {
	port : process.argv[2] 
			|| process.env.PORT 
			|| process.env.C9_PORT 
			|| 8000
};


var application = express.createServer();

application.configure(function() {
	application.set('view engine', 'jade');
	application.set('view options', {layout:false});
});

var game;

application.get('/', function (req, res) {

    var decksToPlayWith = 4;
    game = new blackjack.Game({ howManyDeckOfCards: decksToPlayWith });
    game.deck.shuffle();
    game.playersHand.dealCard(game.deck.getCard());
    game.playersHand.dealCard(game.deck.getCard());

    console.log(game.playersHand.total());
    console.log(game.playersHand);

    res.render('index', { model: { playersHand: game.playersHand, dealersHand: game.dealersHand} });
});


application.get('/twist', function (req, res) {

    game.playersHand.dealCard(game.deck.getCard());

    console.log(game.playersHand.total());
    console.log(game.playersHand);

    res.render('index', { model: { playersHand: game.playersHand, dealersHand: game.dealersHand} });
});

application.get('/stick', function (req, res) {

    game.dealersHand.dealCard(game.deck.getCard());

    while(game.dealersHand.total() <= 12){
        game.dealersHand.dealCard(game.deck.getCard());
    }

    console.log(game.dealersHand.total());
    console.log(game.playersHand.total());

    res.render('stick', { model: { playersHand: game.playersHand, dealersHand: game.dealersHand } });
});


application.listen(8000);