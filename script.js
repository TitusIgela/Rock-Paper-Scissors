
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  // create a function that will randomly return rock paper or scissors.

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice < 1) {
        return console.log("rock");
    } else if (choice < 2) {
        return console.log("paper");
    } else {
        return console.log ("scissors");
    }

}
getComputerChoice();

// console.log(getComputerChoice());