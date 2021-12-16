class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
        this.gesture1; 
    }

    getRandomChoice() {
        this.gesture1 = this.gestures[Math.floor(Math.random() * this.gestures.length)];
    }

}

//inheritances
class Human extends Player {

}

class AI extends Player {

}


module.exports = Player 