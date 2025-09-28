// console.log("Hello World")

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(choice){
    choice = getRandomInt(3)
    if (choice === 0) return "rock";
    if (choice === 1) return "paper";
    if (choice === 2) return "scissor";
}

// console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("Rock, Paper or Scissor", '');
}

// console.log(getHumanChoice())

let humanScore = 0,
computerScore = 0;


function playRound(humanChoice, computerChoice){
    if (!humanChoice){
        humanChoice = getComputerChoice();
    }
    let human = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
    let computer = computerChoice.at(0).toUpperCase() + computerChoice.slice(1).toLowerCase();
    let winner = `You win! ${human} beats ${computer}`;
    let loser = `You lose! ${computer} beats ${human}`;

    // if (human === computer){
    //     console.log("It's a draw, try again!");
    // }else if (human === "Rock" && computer === "Scissor" ||
    //     human === "Paper" && computer === "Rock" ||
    //     human === "Scissor" && computer === "Paper"){
    //         humanScore++;
    //         console.log(winner);
    //     } else { 
    //         computerScore++;
    //         console.log(loser);
    //     }
    switch (human){
    case computer:
       return console.log("It's a draw");
        break;
    case "Rock" && computer === "Scissor":
        humanScore++;
       return console.log(winner);
        break;
    case 'Paper' && computer === "Rock":
        humanScore++;
       return console.log(winner);

        break;
    case 'Scissor' && computer === "Paper":
        humanScore++;
       return console.log(winner);

        break;

        default:
            computerScore++;
            return console.log(loser)

    }
}
 playRound(getHumanChoice(), getComputerChoice());   

//     function repeat(action, time){
//         for (let i = 0; i <= time; i++){
//             action(i);
//         }
//     }
    
//     function playGame(){
//     let score = `Player ${humanScore} vs Computer ${computerScore}`
//     repeat(playRound(getHumanChoice(), getComputerChoice()), 5);
//     console.log(score)
// }

// playGame();


/*(human === "rock" && computer === "paper" ||
human === "paper" && computer === "scissor" ||
human === "scissor" && computer === "rock")*/