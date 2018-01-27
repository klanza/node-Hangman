const inquirer = require('inquirer');

const Word = require('./Word.js');

const wordBank = ['aragorn', 'arwen', 'bilbo', 'boromir', 'denethor',
'elrond', 'eomer', 'eowyn', 'faramir', 'frodo', 'galadriel', 'gandalf',
'gimli', 'gollum', 'legolas', 'merry', 'nazgul', 'pippin', 'samwise',
'saruman', 'sauron', 'shelob', 'theoden', 'treebeard'];

let playWord;
let guessedLetters = [];
let currentLength = 0;
let wordLength = 0;
let incorrectGuess = 7;
var gameState;

/**
 * Function to generate word.
 * @return {word} word to be used for game.
 */
function gameWord() {
  let randomNumber = (Math.floor(Math.random() * 25));
  wordToSolve = new Word(wordBank[randomNumber]);
  wordLength = wordToSolve.wordArray.length;
  playWord = wordToSolve;
  return wordToSolve;
};

const resetGame = function() {
  guessedLetters = [];
  currentLength = 0;
  incorrectGuess = 7;
};

const playAgain = function() {
  inquirer.prompt({
    type: 'confirm',
    name: 'replay',
    message: 'Would you like to play again?',
    default: true,
  }).then((answers) => {
    if (answers.replay) {
      gameWord();
      resetGame();
      gameLogic();
    };
  });
};

const questions = {
    type: 'input',
    name: 'guess',
    message: 'Guess a letter!',
    validate: function(value) {
      const pass = value.match(/(^[A-Z]$)/gi);
      if (pass && guessedLetters.includes(value) === false) {
        return true;
      }
      return 'Please enter: A valid letter (case insensitive) that has not been selected';
    },
};

const gameLogic = function() {
  console.log(playWord + '');
  inquirer.prompt(questions).then((answers) => {
    guessedLetters.push(answers.guess);
    playWord.wordArray.forEach((element) => {
      if (element.guess(answers.guess)) {
        currentLength++;
        let gameState = true;
        return gameState;
      } else {
        gameState = false;
        return gameState;
      }
    });
    console.log(gameState);
    if (currentLength === wordLength) {
      console.log(playWord + '');
      console.log('You won!');
      playAgain();
    } else if (gameState === false) {
      incorrectGuess--;
      console.log(`You have ${incorrectGuess} guesses left!`);
      if (incorrectGuess === 0) {
        console.log('Game over!');
        playAgain();
      } else {
        gameLogic();
      }
    } else {
      gameLogic();
    }
  });
};
console.log(currentLength);
gameWord();
gameLogic();
