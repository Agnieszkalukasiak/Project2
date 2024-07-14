/* Declaring variables, linking to DOM elements*/

const playerObj = document.getElementById("player");
const computerObj = document.getElementById("computer");
const resultObj = document.getElementById("result");
const buttonObj = document.document.querySelectorAll(".button");
const computerScoreObj = document.getElementById("scoreC");
const playerScoreObj = document.getElementById("scoreP");
let player;
let computer;
let result;

let playerScore = 0;
let computerScore = 0;

/* Getting buttons to work */

buttonObj.forEach( button=> button.addEventListener("click",() => {
    player = button.textContent;
        computersTurn();
        playerObj.textContent = `Player: ${player}`;
        computerObj.textContent = `Computer: ${computer}`;
        resultObj.textContent = checkWinner();
        updateScores();
    }));

/* Computer's function */

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

/* Winner function */

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

/* Score function */

function updatesScores() {
    if (resultObj.textContent === "You win!"){
        playerScore++;
    } else if (resultObj.textContent === "You lose!"){
            computerScore++;
        }
        playerScoreObj.textContent = `Score: ${playerScore}`;
        computerScoreObj.textContent = `Score: ${computerScore}`;
    }


 