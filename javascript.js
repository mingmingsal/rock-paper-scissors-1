let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;
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
            playerPoints++;
            return ("Player wins! Rock beats scissors");
            
        }
        else {
            computerPoints++;
            return ("Computer wins! Paper beats Rock");
        }
    }
    else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            playerPoints++;
            return ("Player wins! Paper beats Rock");
        }
        else {
            computerPoints++;
            return ("Computer wins! Scissors beats Paper");
        }
    }
    else if (playerSelection=="scissors"){
        if (computerSelection=="paper"){
            playerPoints++;
            return ("Player wins! Scissors beats Paper");
        }
        else {
            computerPoints++;
            return ("Computer wins! Rock beats Scissors");
        }
    }
}
function playGame(){
    for (let i =0;i<5;i++){
        getChoices();
    }
    if(playerPoints>computerPoints){
        console.log("Player wins!");
    }
    else if (playerPoints==computerPoints){
        console.log ("Draw!");
    }
    else {
        console.log ("Computer wins!");
    }
}
function getChoices(){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
playGame();