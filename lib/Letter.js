const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
class Letter {
    constructor(char) {
        this.char = char;
        this.visible = (!characters.includes(char));
    }
    
    guess(char) {
        this.lastGuess = char;
        this.visible = (char === this.char);
        return this.visible;
    }
    toString() {
        if (!this.lastGuess) {
            if (characters.includes(this.char)) {
                return "_";
            } else {
                return this.char;
            }
        } else {
            return this.lastGuess;
        }
    }

    getSolution() {
        return this.char;
    }
}

module.exports = Letter;
