
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  // create a function that will randomly return rock paper or scissors.

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice < 1) {
        console.log("rock");
    } else if (choice < 2) {
        console.log("paper");
    } else {
        console.log ("scissors");
    }

}
getComputerChoice();

function getHumanChoice(){
    let choice = prompt("Make your choice: rock, paper or scissors", "");
    if (choice === "rock"){
        console.log("rock");
    } else if (choice === "paper"){
        console.log("paper");
    } else if (choice === "scissors"){
        console.log("scissors");
    }

}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

}
