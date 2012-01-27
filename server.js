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


application.get('/', function(req, res){

	var deck = new blackjack.Deck();
	res.render('index.jade', deck);
});

application.listen(8000);