function getComputerChoice(){
    
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

}
function playGame(){

}