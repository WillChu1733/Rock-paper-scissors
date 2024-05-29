// computer choice picks random number 0-2
// each number represents rock, paper or scissors
function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1
}

console.log(getComputerChoice())
