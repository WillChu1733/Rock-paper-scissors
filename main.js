// computer choice picks random number 0-2
// random number is used as an index to select and log a string from the arrayOfChoices array
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3)
  // console.log(randomNum)
  const arrayOfChoices = ['rock', 'paper', 'scissors']
  const compChoice = arrayOfChoices[randomNum]
  return compChoice
}

console.log('Computer chooses:', getComputerChoice())

function getHumanChoice() {
  let choice = prompt('Choose rock, paper, or scissors', 'test') // open the prompt
  const humanChoice = choice.toLowerCase()
  return humanChoice
}

console.log(getHumanChoice())

//initialise scores of both players starting at 0
// const humanScore = 0
// const computerScore = 0

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == 'rock' && computerChoice == 'rock') {
    return 'Tie'
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    return 'Computer wins'
  } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
    return 'Human wins'
  } else if (humanChoice == 'paper' && computerChoice == 'paper') {
    return 'Tie'
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    return 'Computer wins'
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    return 'Human wins'
  } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
    return 'Tie'
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    return 'Human Wins'
  } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    return 'Computer wins'
  }
}

const humanSelection = getHumanChoice() // hard-coded as 'rock' to test - works as intended
const computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection))
