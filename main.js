// computer choice picks random number 0-2
// random number is used as an index to select and log a string from the arrayOfChoices array
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3)
  console.log(randomNum)
  const arrayOfChoices = ['Rock', 'Paper', 'Scissors']
  const compChoice = arrayOfChoices[randomNum]
  return compChoice
}

console.log(getComputerChoice())

function getHumanChoice() {
  let choice = prompt('Choose rock, paper, or scissors', 'test') // open the prompt

  if (choice.toLowerCase == 'rock') {
    console.log('you chose rock')
  } else if (choice.toLowerCase == 'paper') {
    console.log('you chose paper')
  } else if (choice.toLowerCase == 'scissors') {
    console.log('you chose scissors')
  } else return console.log('error')
}

// getHumanChoice()

// //initialise scores of both players starting at 0
// const humanScore = 0
// const computerScore = 0

// function playRound(humanChoice, computerChoice) {}

// const humanSelection = getHumanChoice()
// const computerSelection = getComputerChoice()

// playRound(humanSelection, computerSelection)
