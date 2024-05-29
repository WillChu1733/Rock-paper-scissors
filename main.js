// computer choice picks random number 1-3
// each number represents rock, paper or scissors
const getComputerChoice = () => Math.floor(Math.random() * 3) + 1

console.log(getComputerChoice())

function getHumanChoice() {
  let choice = prompt('Choose your symbol', 'test') // open the prompt

  if (choice == 1) {
    console.log('you chose 1')
  } else if (choice == 2) {
    console.log('you chose 2')
  } else if (choice == 3) {
    console.log('you chose 3')
  } else return console.log('invalid')
}

getHumanChoice()

//initialise scores of both players starting at 0
const humanScore = 0
const computerScore = 0
