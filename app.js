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

const playerSelection = 'rOcK';
const computerSelection = getComputerChoice();

console.log(`Player = ${playerSelection}, Computer = ${computerSelection}`);

console.log(playRound(playerSelection, computerSelection));