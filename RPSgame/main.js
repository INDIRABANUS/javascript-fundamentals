let computerMove = "";
let myChoice = document.getElementById();

//0 to 1/3 rock, 1/3 to 1/2 paper, 1/2 to 1 scissor

function generateNum() {
  const randomNum = Math.random();

  console.log(randomNum);

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissors";
  }
}
