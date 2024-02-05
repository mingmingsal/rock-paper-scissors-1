let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;

const playerText = document.querySelector("#playerPoints");
const computerText = document.querySelector("#computerPoints");
const displayText = document.querySelector("#displayText");
//adding Event Listeners to Buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(choice) {
    playerSelection = choice;
    computerSelection = getComputerChoice();
    checkWin(playerSelection, computerSelection);

}
//comapares selections
function checkWin(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        displayWin(0);
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        playerPoints++;
        displayWin(1);
    }
    else {
        computerPoints++;
        displayWin(2);
    }
    playGame();

}
//true = player, false = computer
function displayWin(outcome) {
    const para = document.createElement("p");
    displayText.appendChild(para);
    switch (outcome) {
        case 1:
            para.textContent = `Player wins! ${playerSelection} beats ${computerSelection}`
            break;
        case 2:
            para.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}`;
            break;
        default:
            para.textContent = "Draw!";
    }
    playerText.textContent=playerPoints;
    computerText.textContent=computerPoints;
}
function playGame() {
    const para = document.createElement("p");
    displayText.appendChild(para);
    if (playerPoints ==5) {
        para.textContent = "Player Wins!"
    }
    else if (computerPoints ==5)  {
        para.textContent = "Computer Wins!"
    }
}