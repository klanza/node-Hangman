const Letter = require('./Letter.js');

const Word = function(word) {
    this.word = word;
    this.wordArray = [];
    this.solved = false;

    for (let i = 0; i < word.length; i++) {
        this.wordArray.push(new Letter(word[i]));
    }
};

Word.prototype.toString = function() {
    return this.wordArray.join(' ');
};

module.exports = Word;
