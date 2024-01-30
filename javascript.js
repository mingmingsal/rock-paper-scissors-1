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
        return input;
        break;
    default:
        getPlayerChoice();
}
}
function playRound(){
getPlayerChoice();
getComputerChoice();
}
function playGame(){

}