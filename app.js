function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];

  const randomIndex = Math.floor(Math.random() * choices.length);

  const randomChoice = choices[randomIndex];

  return randomChoice;
}


function playRound(playerSelection, computerSelection) {

  const playerChoice = playerSelection.toLowerCase();

  switch (playerChoice) {
    case 'rock':
      if (computerSelection === 'rock') {
        return "Tie!";
      } else if (computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors";
      } else if (computerSelection === 'paper') {
        return "You Lose! Paper beats Rock";
      }
      break;
    case 'paper':
      if (computerSelection === 'rock') {
        return "You Win! Paper beats Rock";
      } else if (computerSelection === 'scissors') {
        return "You Lose! Scissors beats Paper";
      } else if (computerSelection === 'paper') {
        return "Tie!";
      }
      break;
    case 'scissors':
      if (computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors";
      } else if (computerSelection === 'scissors') {
        return "Tie!";
      } else if (computerSelection === 'paper') {
        return "You Win! Scissors beats Paper";
      }
      break;
    default:
      return "Invalid choice! Please choose rock, paper, or scissors";
  }

}



function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please choose Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Congrats, You Won!");
    console.log("Player Score = " + playerScore + " - " + "Computer Score = " + computerScore);
  } else if (playerScore < computerScore) {
    console.log("You Lost!");
    console.log("Player Score = " + playerScore + " - " + "Computer Score = " + computerScore);
  } else {
    console.log("It's a tie!");
    console.log("Player Score = " + playerScore + " - " + "Computer Score = " + computerScore);
  }

}

//game();