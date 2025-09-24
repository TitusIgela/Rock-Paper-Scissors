console.log("Hello World")

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(choice){
    choice = getRandomInt(3)
    if (choice === 0) return "rock";
    if (choice === 1) return "paper";
    if (choice === 2) return "scissor";
}

console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("Rock, Paper or Scissor", '');
}

console.log(getHumanChoice())