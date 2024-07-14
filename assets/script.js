/* Declaring variables, linking to DOM elements*/

const playerText = document.querySelector("#player");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");
const Btn = document.querySelectorAll(".Btn");
const computerScoreText = document.querySelector("#computerScore");
const playerScoreText = document.querySelector("#playerScore");
let player;
let computer;
let result;

let playerScore = 0;
let computerScore = 0;

/* Getting buttons to work */

Btn. forEach(button => button.addEventListener("click",() => {
    player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
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
        return "Draw!";}
    else if (computer === "ROCK") {
        return (player === "PAPER" || player === "SPOCK") ? "You win!" : "You lose!";}
    else if (computer === "PAPER") {
        return (player === "SCISSORS" || player === "LIZARD") ? "You win!" : "You lose!";}
    else if (computer === "SCISSORS") {
        return (player === "ROCK" || player === "SPOCK") ? "You win!" : "You lose!";}
    else if (computer === "SPOCK") {
        return (player === "LIZARD" || player === "PAPER") ? "You win!" : "You lose!";}
    else if (computer === "LIZARD") {
        return (player === "SCISSORS" || player === "ROCK") ? "You win!" : "You lose!";}
    }

/* Score function */

function updateScores() {
    if (resultText.textContent === "You win!"){
        playerScore++; }
    else if (resultText.textContent === "You lose!"){
            computerScore++;
        }
        playerScoreText.textContent = `Score: ${playerScore}`;
        computerScoreText.textContent = `Score: ${computerScore}`;
    }

function resetGame() {
    location.reload();
}

const rese = document.querySelector("#resetBtn");

resetBtn.addEventListener('click', resetGame);
    