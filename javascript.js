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
    console.log(playerSelection);
    if (playerSelection==computerSelection){
        return ("Draw!");
    }
    else if (playerSelection=="rock"){
        if (computerSelection=="scissors"){
            return ("Player wins!");
        }
        else {
            return ("Computer wins!");
        }
    }
    else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            return ("Player wins!");
        }
        else {
            return ("Computer wins!");
        }
    }
    else if (playerSelection=="scissors"){
        if (computerSelection=="paper"){
            return ("Player wins!");
        }
        else {
            return ("Computer wins!");
        }
    }
}
function playGame(){

}
function getChoices(){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}