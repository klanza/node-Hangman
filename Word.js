// const letter = require('./Letter.js');

const Letter = function(key) {
    this.letter = key;
    this.guessed = false;

    this.toString = function() {
        if (this.guessed === false) {
            return '_';
        }
        return this.letter;
    };
    this.guess = function(input) {
        if (input === this.letter) {
            this.guessed = true;
        }

        return input === this.letter;
    };
};

const a = new Letter('a');

const Word = function(word) {
    this.wordArray = [];

    for (let i = 0; i < word.length; i++) {
        this.wordArray.push(new Letter(word[i]));
    }
    this.toString = function() {
        return this.wordArray.join(' ');
    };
};

console.log(a + '');

const cat = new Word('cat');

console.log(cat + ' ');
