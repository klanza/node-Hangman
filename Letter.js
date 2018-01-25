const Letter = function(key) {
    this.letter = key;
    this.guessed = false;

    this.letterDisplay = function() {
        if (this.guessed === false) {
            return '_';
        }
        return this.letter;
    };
    this.guess = function(input) {
        if (input === this.letter) {
            this.guessed = true;
        }
    };
};

const a = new Letter('a');

console.log(a.letterDisplay());

