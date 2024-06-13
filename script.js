let humanScore = 0;
let computerScore = 0;

function getComputerChocie() {
  let choice = Math.ceil(Math.random() * 3);

  switch(choice) {
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log(humanChoice);

  if(humanChoice !== "rock" && humanChoice !== "scissors" && humanChoice != "paper") {
    console.log("Please chooce between rock, paper, or scissors");
    playRound(getHumanChoice(), getComputerChocie());
    return;
  }

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
  humanScore++;
  console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
}

function lose(humanChoice, computerChoice) {
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

