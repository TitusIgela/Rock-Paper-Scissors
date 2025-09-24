// console.log("Hello World")

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(choice){
    choice = getRandomInt(3)
    if (choice === 0) return "Rock";
    if (choice === 1) return "Paper";
    if (choice === 2) return "Scissor";
}

// console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("Rock, Paper or Scissor", '');
}

// console.log(getHumanChoice())



function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    if (human === computer){
        console.log("It's a draw, try again!");
    }else if (human === "rock" && computer === "scissor" ||
        human === "paper" && computer === "rock" ||
        human === "scissor" && computer === "paper"){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else { (human === "rock" && computer === "paper" ||
            human === "paper" && computer === "scissor" ||
            human === "scissor" && computer === "rock")
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }
    

    function repeat(action, time){
        for (let i = 0; i <= time; i++){
            action(i);
        }
    }
    let humanScore = 0,
    computerScore = 0;
    
    function playGame(){
    let score = `Player ${humanScore} vs Computer ${computerScore}`
    repeat(playRound(getHumanChoice(), getComputerChoice()), 5);
    console.log(score)
}

playGame();
// switch (winner){
//     case :
//        return console.log("It's a draw");
//         break;
//     case 'scissor' && 'paper':
//         humanScore++;
//        return console.log('you win');

//         break;
//     case 'paper' && 'rock':
//         humanScore++;
//        return console.log('you win');

//         break;

// }