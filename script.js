
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  // function that will randomly return rock paper or scissors.

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(getComputerChoice())

// function to get player input

function getHumanChoice(){
    let choice = prompt("Make your choice: rock, paper or scissors", "");
    if (choice.toLowerCase() === "rock"){
        return "rock";
    } else if (choice.toLocaleLowerCase() === "paper"){
        return "paper";
    } else if (choice.toLowerCase() === "scissors"){
        return "scissors";
    }
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){


}
