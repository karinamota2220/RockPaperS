let humanScore = 0;
let compScore = 0;

const userScore = document.getElementById("humanScore");
const computerScore = document.getElementById("compScore");
const resultsDiv = document.getElementById("results");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) +1 // was missing let (added it)
    let choice;
    if (num === 1) {
        choice = "scissors"
    }
    else if (num === 2) {
        choice = "rock"
    }
    else if (num === 3) {
        choice = "paper"  
    }
    return choice
}


function updateResults(text) {
  const p = document.createElement("p");
  p.textContent = text;
  resultsDiv.appendChild(p);
}

function checkWinner() {
  if (humanScore >= 5 || compScore >= 5) {
    const winner =
      humanScore > compScore ? "You win the game!" : "Computer wins the game!";
    updateResults(`${winner}`);
    // Disable buttons
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}


function playRound(humanChoice, computerChoice) {
    // your code here!
  if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    updateResults("You win! Scissors beat Paper")
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    updateResults("You win! Rock beats Scissor")
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    updateResults("You win! Paper beats Rock")
  } else if (humanChoice == "scissors" && computerChoice == "rock" ) {
    compScore++;
    updateResults("You lost! Scissors lost to Rock.")
  } else if (humanChoice == "rock" && computerChoice == "paper" ) {
    compScore++;
    updateResults("You lost! Rock lost to Paper.")
  } else if (humanChoice == "paper" && computerChoice == "scissors" ) {
    compScore++;
    updateResults("You lost! Paper lost to Scissors.")
  } else if (humanChoice == computerChoice) {
    humanScore++;
    compScore++;
    updateResults("It's a tie! You and Computer guessed the same.")
  } else {
    updateResults("Invalid choice.")
  }

  userScore.textContent = humanScore;
  computerScore.textContent = compScore;

  checkWinner();
}



// Add event listeneres and buttons
document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

