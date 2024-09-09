
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


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

function getHumanChoice(){
    let choice = prompt("Make your choice: rock, paper or scissors", "");
    if (choice === null || choice === ""){
        return getComputerChoice();
    } else if(choice.toLowerCase() === "rock"){
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

    if (humanChoice === computerChoice){
        console.log("it's a tie!")
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;        
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;

    }
           
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playGame(){
    playRound;
    console.log(humanSelection);
    console.log(computerSelection);
    console.log(`Score User ${humanScore}/ Computer ${computerScore}`);
    playRound;
    console.log(humanSelection);
    console.log(computerSelection);
    console.log(`Score User ${humanScore}/ Computer ${computerScore}`);
    playRound;
    console.log(humanSelection);
    console.log(computerSelection);

    console.log(`Score User ${humanScore}/ Computer ${computerScore}`);
    playRound;
    console.log(humanSelection);
    console.log(computerSelection);

    console.log(`Score User ${humanScore}/ Computer ${computerScore}`);
    playRound;
    console.log(humanSelection);
    console.log(computerSelection);

    console.log(`Score User ${humanScore}/ Computer ${computerScore}`);

}


playGame();