"use script"
const prompt = require("prompt-sync")();
const { Player, Human, AI } = require("./players");

class Game {
    constructor() {
        this.playerOne;
        this.playerTwo;
        this.gestures = [];
    }

    runGame() {
        this.gameSetup();
        this.startGame();

        while (this.playerOne.score < 2 && this.playerTwo.score < 2) {
            this.playerOne.getRandomChoice();
            this.playerTwo.getRandomChoice();

            if (this.playerOne.gesture1 == "rock") {
                if (this.playerTwo.gesture1 == "scissors" || this.playerTwo.gesture1 == "lizard") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "spock") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "rock") {
                    console.log("Oo, nice try! You both tied.");
                } else if (this.playerOne || this.playerTwo !== "rock", "paper", "scissors", "lizard", "spock");

            } else if (this.playerOne.gesture1 == "paper") {
                if (this.playerTwo.gesture1 == "rock" || this.playerTwo.gesture1 == "spock") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "scissors" || this.playerTwo.gesture1 == "lizard") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "paper") {
                    console.log("Oo, nice try! You both tied.");
                }
            } else if (this.playerOne.gesture1 == "scissors") {
                if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "lizard") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "rock" || this.playerTwo.gesture1 == "spock") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "scissors") {
                    console.log("Oo, nice try! You both tied.");
                }
            } else if (this.playerOne.gesture1 == "lizard") {
                if (this.playerTwo.gesture1 == "rock" || this.playerTwo.gesture1 == "scissors") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "spock") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "lizard") {
                    console.log("Oo, nice try! You both tied.");
                }
            } else if (this.playerOne.gesture1 == "spock") {
                if (this.playerTwo.gesture1 == "scissors" || this.playerTwo.gesture1 == "rock") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "lizard") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "spock") {
                    console.log("Oo, nice try! You both tied.");
                }
            }
        }

        this.displayGameWinner();
    }

    startGame() {
        console.log("Welcome to the Rock, Paper, Scissors, Lizard, Spock Game!");
        console.log("You can play single player against the AI, or multiplayer against one another.");
        console.log("The player who gets the correct response will win that round.");
        console.log("The RPSLS game will be a 'best of three' to decide a winner.");
        console.log("May the odds be in your favor!");
    }

    displayGameWinner() {
        if (this.playerOne.score > this.playerTwo.score) {
            console.log(this.playerOne.name + " " + "WINS THE GAME!");
            console.log(this.playerOne.score);
        }
        else {
            console.log(this.playerTwo.name + " " + "WINS THE GAME!");
            console.log(this.playerTwo.score);
        }
    }

    gameSetup() {
        let newName = prompt("PlayerOne what is your name?" +  " ");
        this.playerOne = new Human(newName);
        let opponentType = prompt("Are you playing against the AI or another human?" + " ");
        if (opponentType == "human") {
            let playerTwoName = prompt("PlayerTwo what is your name?" + " ");
            this.playerTwo = new Human(playerTwoName);
        }
        else if (opponentType == "AI") {
            this.playerTwo = new AI("Bot")
        }
        else {
            console.log("Error... Please choose an available option.");
        }
    }
}



module.exports = Game 