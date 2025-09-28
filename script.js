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





 
function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;
    let score;    

    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        score  = `Player: ${humanScore} vs Computer: ${computerScore}`;
        console.log(score)
    }
    if (humanScore === computerScore){
        console.log("It's a draw try again.")
    } else if (humanScore > computerScore){
        console.log("Congrats, you are the WINNER!");
    }else console.log("Too bad, maybe next time...");
    
    function playRound(humanChoice, computerChoice){
        if (!humanChoice){
            humanChoice = getComputerChoice();
        }
        let human = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
        let computer = computerChoice.at(0).toUpperCase() + computerChoice.slice(1).toLowerCase();
        let winner = `You win! ${human} beats ${computer}.`;
        let loser = `You lose! ${computer} beats ${human}.`;
    
        if (human === computer){
            console.log(`${human} vs ${computer}\nIt's a draw, try again!`);
        }else if (human === "Rock" && computer === "Scissor" ||
            human === "Paper" && computer === "Rock" ||
            human === "Scissor" && computer === "Paper"){

                console.log(winner);
                humanScore++;

            } else { 
                console.log(loser);
                computerScore++;
            }

    }

        
}

playGame(); 



        // switch (human){
        // case computer:
        //    console.log("It's a draw");
        //     break;
        // case "Rock" && computer === "Scissor":
        //     humanScore++;
        //     console.log(winner);
        //     break;
        // case 'Paper' && computer === "Rock":
        //     humanScore++;
        //    console.log(winner);
    
        //     break;
        // case 'Scissor' && computer === "Paper":
        //     humanScore++;
        //    console.log(winner);
    
        //     break;
    
        //     default:
        //         computerScore++;
        //         console.log(loser)
    
        // }