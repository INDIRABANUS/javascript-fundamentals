const choiceArray = ["rock", "paper", "scissor"];
let playreScore = 0;
let computerScore = 0;
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

const play = (playerChoice) => {

  let result = "";

  const computerChoice = choiceArray[Math.floor(Math.random() * 3)];

  const resultDisplay = document.getElementById("result");

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "scissor":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("win","lose");

  if(result === "YOU WIN!"){
    resultDisplay.classList.add("win");
  }
  else if(result === "YOU LOSE!"){
    resultDisplay.classList.add("lose");
  }

  if(result ==="YOU WIN!"){
    playreScore ++ ;
    playerScoreDisplay.textContent = playreScore;
  }
  else if(result === "YOU LOSE!"){
    computerScore ++ ;
    computerScoreDisplay.textContent = computerScore;
  }


};


