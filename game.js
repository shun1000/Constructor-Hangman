var Word = require('./word.js');

module.exports.getWord = function (){


		var deck = ["Chargers","Padres","Giants","Mets","Dodgers"];

		// picks a random word
		var randomWord = deck[Math.floor(Math.random() * deck.length)];

		// creates word object
		var word = new Word(randomWord);

		// return word object
		return word;

};