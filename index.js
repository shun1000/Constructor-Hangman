var game = require('./game.js');
var inquirer = require('inquirer');

// Game header
console.log('**************************************************************************');
console.log('                     Welcome to Hangman                         ');
console.log('**************************************************************************');
console.log('                            Guess the Word                            ');

console.log('');
console.log('');


//get a random word to guess


startGame();

function startGame() {

    var word = game.getWord();

    // console logs word
    word.display();

    // get userGuess
    getUserGuess(word);
}

// get the user guess
function getUserGuess(word) {

    inquirer.prompt([{
        name: "letter",
        message: "Enter a letter: ",
        validate: function (input) {
            return /[a-z]/.test(input.trim().toLowerCase());
        }
    }])

        .then(function (guess) {
            // calls the method which does the processing after checking if the letter is in the word
            word.letterInWord(guess.letter.toLowerCase());
            word.display();

            if (!word.guessed) {
                if (word.guessesRemaining > 0) {
                    getUserGuess(word);
                } else {

                    console.log("\n" + "                   Oops ! You ran out of your guesses !\n\n");
                    startGame();
                }

            } else if (word.guessed) {

                console.log("\n" + "                   Congratulations ! You have guessed it !\n\n");
                startGame();
            }
        });
}
