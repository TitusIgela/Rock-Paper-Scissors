function random(number) {
    return Math.floor(Math.random() * number);
  }

function getComputerChoice(random) {
    let choice = random(100)
    console.log(choice)
    if (choice < 33){
       return console.log("rock");
    } else if (choice <= 1){
        return console.log("paper");
    }else if (choice == 2) { 
        return console.log("scissors");
    }
}
getComputerChoice()

// create a function that will randomly return rock paper or scissors.