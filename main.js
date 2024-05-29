// computer choice picks random number 0-2
// random number is used as an index to select and log a string from the arrayOfChoices array
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3)
  console.log(randomNum)
  const arrayOfChoices = ['Rock', 'Paper', 'Scissors']
  console.log(arrayOfChoices[randomNum])
}

getComputerChoice()

// function getHumanChoice() {
//   let choice = prompt('Choose your symbol', 'test') // open the prompt

//   if (choice == 1) {
//     console.log('you chose 1')
//   } else if (choice == 2) {
//     console.log('you chose 2')
//   } else if (choice == 3) {
//     console.log('you chose 3')
//   } else return console.log('invalid')
// }

// getHumanChoice()

// //initialise scores of both players starting at 0
// const humanScore = 0
// const computerScore = 0

// function playRound(humanChoice, computerChoice) {}

// const humanSelection = getHumanChoice()
// const computerSelection = getComputerChoice()

// playRound(humanSelection, computerSelection)
