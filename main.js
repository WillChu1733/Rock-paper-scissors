//initialise scores of both players starting at 0
let humanScore = 0
let computerScore = 0

// computer choice picks random number 0-2
// random number is used as an index to select and log a string from the arrayOfChoices array
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3)
  // console.log(randomNum)
  const arrayOfChoices = ['rock', 'paper', 'scissors']
  const compChoice = arrayOfChoices[randomNum]

  return compChoice
}

function getHumanChoice() {
  // open the prompt
  let humanChoice = prompt(
    'Choose rock, paper, or scissors',
    'rock, paper, scissors'
  ).toLowerCase()
  return humanChoice
}

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == 'rock' && computerChoice == 'rock') {
    return 'Tie'
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    computerScore++
    return 'Computer wins'
  } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
    humanScore++
    return 'Human wins'
  } else if (humanChoice == 'paper' && computerChoice == 'paper') {
    return 'Tie'
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    computerScore++
    return 'Computer wins'
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    humanScore++
    return 'Human wins'
  } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
    return 'Tie'
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    humanScore++
    return 'Human Wins'
  } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    computerScore++
    return 'Computer wins'
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice() // hard-coded as 'rock' to test - works as intended
    const computerSelection = getComputerChoice()
    console.log(`You choose: ${humanSelection}`)
    console.log(`Computer chooses: ${computerSelection}`)
    console.log(playRound(humanSelection, computerSelection))
  }
  if (humanScore > computerScore) {
    console.log('Human wins game')
  } else if (humanScore < computerScore) {
    console.log('Computer wins game')
  } else console.log('Tie game')
}

playGame()
