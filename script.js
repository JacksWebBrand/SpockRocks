const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');
const header = document.getElementById('headingText');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Reset all selected icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    import('./confetti.js')
    .then((module) => {   
      module.stopConfetti();
      module.removeConfetti();
    })
    icon.classList.remove('selected');
  });
}

// Reset everything and start the game again
function resetAll() {
  resultText.textContent = '';
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resetSelected();
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
}
window.resetAll = resetAll;

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber <= 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors'; 
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

// Chech result, increase scores, update resultText
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = 'Tie...'
    header.style.color = 'white';
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      import('./confetti.js')
      .then((module) => {
        module.startConfetti();
      })
      resultText.textContent = 'You Won!';
      header.style.color = '#5ff86c';
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = 'You Lost!';
      header.style.color = '#ff4444';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

function updateHeaderText(playerChoice, computerChoice) {
  console.log(playerChoice, computerChoice)
  if (playerChoice === 'rock') {
      switch (computerChoice) {
        case 'rock':
          header.textContent = "Well that didn't do very much...";
          break;
        case 'paper':
          header.textContent = "Paper covers Rock";
          break;
        case 'scissors':
          header.textContent = "Rock crushes Scissors";
          break;
        case 'lizard':
          header.textContent = "Rock crushes Lizard";
          break;
        case 'spock':
          header.textContent = "Spock vaproizes Rock";
          break;
      }
      return;
    } else if (playerChoice == 'paper') {
      switch (computerChoice) {
        case 'rock':
          header.textContent = "Paper covers Rock";
          break;
        case 'paper':
          header.textContent = "Well that didn't do very much...";
          break;
        case 'scissors':
          header.textContent = "Scossors cut Paper";
          break;
        case 'lizard':
          header.textContent = "Lizard eats Paper";
          break;
        case 'spock':
          header.textContent = "Paper disproves Spock";
          break;
      }
      return;
    } else if (playerChoice == 'scissors') {
      switch (computerChoice) {
        case 'rock':
          header.textContent = "Rock crushes Scissors";
          break;
        case 'paper':
          header.textContent = "Scissors cut Paper";
          break;
        case 'scissors':
          header.textContent = "Well that didn't do very much...";
          break;
        case 'lizard':
          header.textContent = "Scissors decapitate Lizard";
          break;
        case 'spock':
          header.textContent = "Spock smashes Scissors";
          break;
      }
    } else if (playerChoice == 'lizard') {
      switch (computerChoice) {
        case 'rock':
          header.textContent = "Rock crushes Lizard";
          break;
        case 'paper':
          header.textContent = "Lizard eats Paper";
          break;
        case 'scissors':
          header.textContent = "Scissors decapitate Lizard";
          break;
        case 'lizard':
          header.textContent = "Well that didn't do very much...";
          break;
        case 'spock':
          header.textContent = "Lizard poisons Spock";
          break;
      } 
    } else {
      switch (computerChoice) {
        case 'rock':
          header.textContent = "Spock vaporizes Rock";
          break;
        case 'paper':
          header.textContent = "Paper disproves Spock";
          break;
        case 'scissors':
          header.textContent = "Spock smashes Scissors";
          break;
        case 'lizard':
          header.textContent = "Lizard poisons Spock";
          break;
        case 'spock':
          header.textContent = "Well that didn't do very much...";
          break;
    }
  }
}

// Call functions to process the turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
  updateHeaderText(playerChoice, computerChoice);
}

// Computer choice and styling
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = computerChoice.toUpperCase();
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = computerChoice.toUpperCase();
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = computerChoice.toUpperCase();
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = computerChoice.toUpperCase();
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = computerChoice.toUpperCase();
      break;
    default:
      break;
  }
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = playerChoice.toUpperCase();
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = playerChoice.toUpperCase();
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = playerChoice.toUpperCase();
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = playerChoice.toUpperCase();
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = playerChoice.toUpperCase();
      break;
    default:
      break;
  }
}
window.select = select;