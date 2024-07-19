
document.addEventListener ('DOMContentLoaded', function(){

    /** 
 * Declaring variables, linking to DOM elements*/

const playerText = document.getElementById("player");
const computerText = document.getElementById("computer");
const resultText = document.getElementById("result");
const btn = document.querySelectorAll(".btn");
const computerScoreText = document.getElementById("computerScore");
const playerScoreText = document.getElementById("playerScore");
const resetbtn = document.getElementById("resetbtn");
const triesRemainingText = document.getElementById("triesRemaining");
const winner = document.getElementById("winner")

let player;
let computer;


let playerScore = 0;
let computerScore = 0;
let triesRemaining = 5;

/** 
 * Getting buttons to work */

btn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    triesRemainingText.textContent = `${triesRemaining}`;
    resultText.textContent = checkWinner();
    updateScores();
    updateTries();
}));

/**  
 * Computer's function */

function computerTurn() {
    const randNum = Math.floor(Math.random() * 5) + 1;
    switch (randNum) {
        case 1:
            computer = 'ROCK';
            break;
        case 2:
            computer = 'PAPER';
            break;
        case 3:
            computer = 'SCISSORS';
            break;
        case 4:
            computer = 'LIZARD';
            break;
        case 5:
            computer = 'SPOCK';
            break;
    }
}

/**  
 * Winner function 
 * */

function checkWinner() {
    if (player === computer) {
        return "Draw!";
    }
    else if (computer === "ROCK") {
        return (player === "PAPER" || player === "SPOCK") ? "You win!" : "You lose!";
    }
    else if (computer === "PAPER") {
        return (player === "SCISSORS" || player === "LIZARD") ? "You win!" : "You lose!";
    }
    else if (computer === "SCISSORS") {
        return (player === "ROCK" || player === "SPOCK") ? "You win!" : "You lose!";
    }
    else if (computer === "SPOCK") {
        return (player === "LIZARD" || player === "PAPER") ? "You win!" : "You lose!";
    }
    else if (computer === "LIZARD") {
        return (player === "SCISSORS" || player === "ROCK") ? "You win!" : "You lose!";
    }
}

/**  
 * Score function 
 */

function updateScores() {
    if (resultText.textContent === "You win!") {
        playerScore++;
    }
    else if (resultText.textContent === "You lose!") {
        computerScore++;
    }
    playerScoreText.textContent = ` ${playerScore}`;
    computerScoreText.textContent = ` ${computerScore}`;
}

/**
 * Tries funtion
 */
function updateTries(){
    triesRemaining --;
    triesRemaining.textContent = `Tries remaining: ${triesRemaining}`;
    if (triesRemaining < 0) {endGame()}
}

/**
 * end game function
 */

function endGame(){
    btn.forEach(button => button.disabled = true);
    resultText.textContent = "Game Over";
}

function callingWinner (){
    if (playerScore < computerScore) {winner.textContent = "Computer Wins!";}
    else if(playerScore>computerScore) {winner.textContent = "Player Wins!";}
     else {winner.textContent = "Draw!";}
}


function resetGame() {
    location.reload();
}

resetbtn.addEventListener('click', resetGame);
});
