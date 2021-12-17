const prompt = require("prompt-sync")();
class Player {
    constructor(namestr) {
        this.name = namestr;
        this.score = 0;
        this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
        this.gesture1;
    }

}

//inheritances
class Human extends Player {
    constructor(namestr) {
        super(namestr);
    }
    // displayHumanChoice() {
    //     console.log("human player" + this.name + "chose" + this.humanPick);
    //     console.log("human player" + this.name + "chose" + this.humanPick);
    // }
    getRandomChoice() {
        this.gesture1 = prompt("Choose a gesture: rock, paper, scissors, lizard, or spock.");
        

    }
}

class AI extends Player {
    constructor(name) {
        super(name);
        this.aIChoice; 
    }
    getRandomChoice() {
        this.gesture1 = this.gestures[Math.floor(Math.random() * this.gestures.length)];
        console.log(this.gesture1);
    }

}

module.exports = { Player, Human, AI } 