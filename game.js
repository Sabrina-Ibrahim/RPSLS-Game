const prompt = require("prompt-sync")();
const Player = require("./players");

class Game {
    constructor(){
        this.playerOne = new Player("Sabrina"); 
        this.playerTwo = new Player ("Michelle");
        this.gestures = [];
    }
        runGame() {

    while(this.playerOne.score < 2 && this.playerTwo.score < 2) {
        this.playerOne.getRandomChoice()
        this.playerTwo.getRandomChoice()
        console.log(this.playerOne);
        console.log(this.playerTwo);

        if (this.playerOne.gesture1 == "rock") {
            if(this.playerTwo.gesture1 == "scissors" || this.playerTwo.gesture1 == "lizard");
                console.log(this.playerOne.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerOne.score+=1;
            } else if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "spock") {
                console.log(this.playerTwo.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerTwo.score+=1;
            } else if (this.playerTwo.gesture1 == "rock") {
                console.log("Oo, nice try! You both tied.");
            }
        }
        if (this.playerOne.gesture1 == "paper") {
            if(this.playerTwo.gesture1 == "rock" || this.playerTwo.gesture1 == "spock") {
                console.log(this.playerOne.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerOne.score+=1;
            } else if (this.playerTwo.gesture1 == "scissors" || this.playerTwo.gesture1 == "lizard") {
                console.log(this.playerTwo.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerTwo.score+=1;
            } else if (this.playerTwo.gesture1 == "paper") {
                console.log("Oo, nice try! You both tied.");
            }
        }  
        if (this.playerOne.gesture1 == "scissors") {
            if(this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "lizard") {  
                console.log(this.playerOne.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerOne.score+=1;
            } else if (this.playerTwo.gesture1 == "rock" || this.playerTwo.gesture1 == "spock") {
                console.log(this.playerTwo.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerTwo.score+=1;
            } else if (this.playerTwo.gesture1 == "scissors") {
                console.log("Oo, nice try! You both tied.");
            }
        }
        if (this.playerOne.gesture1 == "lizard") {
            if(this.playerTwo.gesture1 == "rock" || this.playerTwo.gesture1 == "scissors") {  
                console.log(this.playerOne.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerOne.score+=1;
            } else if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "spock") {
                console.log(this.playerTwo.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerTwo.score+=1;
            } else if (this.playerTwo.gesture1 == "lizard") {
                console.log("Oo, nice try! You both tied.");
            }
        }    
        if (this.playerOne.gesture1 == "spock"){
            if(this.playerTwo.gesture1 == "scissors" || this.playerTwo.gesture1 == "rock") {  
                console.log(this.playerOne.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerOne.score+=1;
            } else if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "lizard") {
                console.log(this.playerTwo.name + " " + "wins this round!");
                console.log(this.gesture1);
                this.playerTwo.score+=1;
            } else if (this.playerTwo.gesture1 == "spock") {
                console.log("Oo, nice try! You both tied.");
            }
        }
    }

        startGame() {
        console.log("Welcome to the Rock, Paper, Scissors, Lizard, Spock Game!");
        console.log("You can play single player against the AI, or multiplayer against one another.");
        console.log("The player who gets the correct response will win that round.");
        console.log("The RPSLS game will be a 'best of three' to decide a winner.");
        console.log("May the odds be in your favor!");
        //Name 2 players prompting who they are. 
        //Each player chooses a gesture. (choosing a gesture method is part of player, not "game" class.)
        //Determine who won from those gestures, by a function ex: rock crushed scissors. 
        //win, loss, tie 
        //Whichever player wins that round we want the score to increase +1. 
        //replay the gesture portion of the game if one player is >1, if a player is 2 for score - stop game - winner. 
    }
}



module.exports = Game 