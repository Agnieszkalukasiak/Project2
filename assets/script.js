/* declaring variables, linking to dom elements*/

const playerObj= document.qetElementById("player");
const computerObj= document.qetElementById("computer");
const resultObj= document.qetElementById("result");
const buttonObj= document.qetElementById("button");
const computerScoreObj=document.qetElementById("scoreC");
const playerScoreObj=document.qetElementById("scoreP");
let player;
let computer;
let result;

let playerScore = 0;
let computerScore = 0;

/* getting buttons to work */

buttonObj. forEach (function buttonClick(button){button.addEventListener("click", buttonClick()) 
    {player=button.textContent;
    computerTurn();
    playerObj.textContent = 'Player:${player}';
    computerObj.textContent='Computer:${computer}';
    resultObj.textContent = checkWinner();
}});

function computerTurn(){ const randNum = Math.floor(Math.random()*5)+1;
    switch(randNum){
        case 1:
            computer:'ROCK';
            break;
            case 2:
            computer:'PAPER';
            break;
            case 3:
            computer:'SCISSORS';
            break;
            case 4:
            computer:'LIZARD';
            break;
            case 1:
            computer:'SPOCK';
            break;
    }
}
    
