//initialise scores of both players starting at 0
let humanScore = 0
let computerScore = 0

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const scoreCount = document.querySelector('.score-count')

const getComputerChoice = () => {
  const arrayOfChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * arrayOfChoices.length) // remove hard-code 3
  const compChoice = arrayOfChoices[randomNum]

  return compChoice // can just return arrayOfChoices[randomNum]
}

// function getHumanChoice() {
//   // open the prompt
//   let validChoices = ['rock', 'paper', 'scissors']
//   let humanChoice = ''

//   while (true) {
//     humanChoice = prompt('Choose rock, paper, or scissors').toLowerCase()
//     if (validChoices.includes(humanChoice)) {
//       break // Exit the loop if the choice is valid
//     } else {
//       alert('Invalid choice, please choose rock, paper, or scissors.')
//     }
//   }

//   return humanChoice
// }

const playRound = (humanChoice, computerChoice) => {
  console.log('1 ', humanChoice, '2 ', computerChoice)

  outcomeDiv.innerHTML = ''
  scoreCount.innerHTML = ''
  if (humanChoice == computerChoice) {
    const p = document.createElement('p')
    p.innerText = `Tie, you both picked ${humanChoice}`
    outcomeDiv.appendChild(p)
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    computerScore++
    const p = document.createElement('p')
    p.innerText = 'Computer wins'
    outcomeDiv.appendChild(p)
  } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
    humanScore++
    const p = document.createElement('p')
    p.innerText = 'Human wins'
    outcomeDiv.appendChild(p)
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    computerScore++
    const p = document.createElement('p')
    p.innerText = 'Computer wins'
    outcomeDiv.appendChild(p)
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    humanScore++
    const p = document.createElement('p')
    p.innerText = 'Human wins'
    outcomeDiv.appendChild(p)
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    humanScore++
    const p = document.createElement('p')
    p.innerText = 'Human Wins'
    outcomeDiv.appendChild(p)
  } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    computerScore++
    const p = document.createElement('p')
    p.innerText = 'Computer wins'
    outcomeDiv.appendChild(p)
  }
  const z = document.createElement('p')
  z.innerText = `${humanScore}:${computerScore}` // display running score
  scoreCount.appendChild(z)
}

const checkWinner = (humanScore, computerScore) => {
  if (humanScore == 5) {
    const h2 = document.createElement('h2')
    h2.innerText = `Human wins ${humanScore} to ${computerScore}`
    scoreCount.appendChild(h2)
  } else if (computerScore == 5) {
    const h2 = document.createElement('h2')
    h2.innerText = `Computer wins ${computerScore} to ${humanScore}`
    scoreCount.appendChild(h2)
  }
}

rockButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice()
  const humanChoice = 'rock'
  playRound(humanChoice, computerChoice)
  checkWinner(humanScore, computerScore)
})

paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice()
  const humanChoice = 'paper'
  playRound(humanChoice, computerChoice)
  checkWinner(humanScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice()
  const humanChoice = 'scissors'
  playRound(humanChoice, computerChoice)
  checkWinner(humanScore, computerScore)
})

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     // const humanSelection = getHumanChoice() // hard-coded as 'rock' to test - works as intended
//     const computerSelection = getComputerChoice()
//     console.log(`You choose: ${humanSelection}`)
//     console.log(`Computer chooses: ${computerSelection}`)
//     console.log(playRound(humanSelection, computerSelection))
//   }

//   console.log(`Final Score - ${humanScore}:${computerScore}`)
//   if (humanScore > computerScore) {
//     console.log('Human wins game')
//   } else if (humanScore < computerScore) {
//     console.log('Computer wins game')
//   } else console.log('Tie game')
// }

// playGame()
