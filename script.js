let humanScore = 0;
let computerScore = 0;

function getComputerChocie() {
  // Get a random value from 1 to 3 
  let choice = Math.ceil(Math.random() * 3);

  // Return rock, paper, or scissors depending on value (3 possible options)
  switch(choice) {
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

function getHumanChoice() {
  // Prompt user for a choice between rock, paper, or scissors
  let choice = prompt("Rock, Paper, or Scissors?");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  // Take care of case sensitivity for user input
  humanChoice = humanChoice.toLowerCase();


  // Logic for rock, paper, scissors
  if(humanChoice===computerChoice) {
    console.log("You Tie! No Points Added");
  }
  else if(humanChoice === "rock" && computerChoice === "scissors") {
    win(humanChoice, computerChoice);
  }
  else if(humanChoice === "paper" && computerChoice ==="rock") {
    win(humanChoice, computerChoice);    }
  else if(humanChoice==="scissors" && computerChoice==="rock") {
    win(humanChoice, computerChoice);    }
  else {
    lose(humanChoice, computerChoice);    }
}


function win(humanChoice, computerChoice) {
  // Add to human score
  humanScore++;
  console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
}

function lose(humanChoice, computerChoice) {
  // Add to computer score
  computerScore++;
  console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
}

function playGame() {
  for(let i = 0; i<5; i++) {
    playRound(getHumanChoice(), getComputerChocie());
  }
  console.log(`Final Score: 
    You - ${humanScore}
    Computer - ${computerScore}`);
}
playGame();

