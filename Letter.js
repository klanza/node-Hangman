const Letter = function(key) {
    this.letter = key;
    this.guessed = false;
};

Letter.prototype.toString = function() {
    if (this.guessed === false) {
        return '_';
    }
    return this.letter;
};

Letter.prototype.guess = function(input) {
    if (input === this.letter) {
        this.guessed = true;
    }

    return input === this.letter;
};

module.exports = Letter;
