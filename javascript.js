let playerSelection;
let computerSelection;
function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}
function getPlayerChoice(){

let input = prompt("Play your hand", "Rock, Paper, Scissors").toLowerCase();
switch(input){
    case "rock":
    case "paper":
    case "scissors":
        console.log(input);
        return input;
    default:
        
        return getPlayerChoice();
        return "invalid";
}
}
function playRound(playerSelection, computerSelection){
    if (playerSelection==computerSelection){
        return ("Draw!");
    }
    else if (playerSelection=="rock"){
        if (computerSelection=="scissors"){
            return ("Player wins! Rock beats scissors");
        }
        else {
            return ("Computer wins! Paper beats Rock");
        }
    }
    else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            return ("Player wins! Paper beats Rock");
        }
        else {
            return ("Computer wins! Scissors beats Paper");
        }
    }
    else if (playerSelection=="scissors"){
        if (computerSelection=="paper"){
            return ("Player wins! Scissors beats Paper");
        }
        else {
            return ("Computer wins! Rock beats Scissors");
        }
    }
}
function playGame(){
    getChoices();
    getChoices();
    getChoices();
    getChoices();
    getChoices();
}
function getChoices(){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
playGame();