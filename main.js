
function getComputerChoice(){
    num = Math.floor(Math.random() * 3) +1
    let choice;
    if(num == 1 ){
        choice = "scissors"
    }
    else if (num == 2){
        choice = "rock"
    }
    else if (num == 3 ){
      choice = "paper"  
    }
    return choice
}

function getHumanChoice(){
     return prompt("Chose between Rock, Paper, or Scissors").toLowerCase();
}

let humanScore = 0;
let compScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
  if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log("You win! Scissors beat Paper")
    console.log("human Score: ", humanScore, "ComputerScore: ", compScore)

  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    console.log("You win! Rock beats Scissor")
    console.log("human Score: ", humanScore, "ComputerScore: ", compScore)
  } else if(humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log("You win! Paper beats Rock")
    humanScore++;
    console.log("human Score: ", humanScore, "ComputerScore: ", compScore)
  } else if(humanChoice == "scissors" && computerChoice == "rock" ) {
    compScore++;
    console.log("You lost! Scissors lost to Rock.")
    console.log("human Score: ", humanScore, "ComputerScore: ", compScore)
  } else if(humanChoice == "rock" && computerChoice == "paper" ) {
    compScore++;
    console.log("You lost! Rock lost to Paper.")
    console.log("human Score: ", humanScore, "ComputerScore: ", compScore)
  } else if(humanChoice == "paper" && computerChoice == "scissors" ) {
    compScore++;
    console.log("You lost! Paper lost to Scissors.")
    console.log("human Score: ", humanScore, "ComputerScore: ", compScore)
  } else if (humanChoice == computerChoice) {
    humanScore++;
    compScore++;
    console.log("It's a tie! You and Computer guessed the same.")
    console.log("human Score: ", humanScore, "ComputerScore: ", compScore)
  }
}
  
function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if(humanScore >compScore){
        console.log("You Win!")
        console.log("human Score: ", humanScore, "ComputerScore: ", compScore)

    }
    else {
        console.log("Computer wins!")
        console.log("human Score: ", humanScore, "ComputerScore: ", compScore)
    }

}
playGame()