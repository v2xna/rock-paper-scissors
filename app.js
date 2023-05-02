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

const buttons = document.querySelectorAll('#btn');
const scoreDiv = document.querySelector('#score-details');
const resultDiv = document.querySelector('#result');

let computerScore = 0;
let playerScore = 0;


buttons.forEach(btn => btn.addEventListener('click', () => {

  const playerSelection = btn.textContent;
  const computerSelection = getComputerChoice();

  const result = playRound(playerSelection, computerSelection);
  resultDiv.textContent = result;

  if (result.startsWith("You Win!")) {
    playerScore++;
  } else if (result.startsWith("You Lose!")) {
    computerScore++;
  }

  scoreDiv.textContent = `Player: ${playerScore} | Computer ${computerScore}`;

  if (playerScore === 5) {
    resultDiv.textContent = 'Congrats you have won the game!';

    playerScore = 0;
    computerScore = 0;

  } else if (computerScore === 5) {
    resultDiv.textContent = 'You lost the game!';

    playerScore = 0;
    computerScore = 0;
  }
}));

