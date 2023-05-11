
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const roundNumberDisplay = document.querySelector('#round-number-display');
const winsDisplay = document.querySelector('#wins-display');
const lossesDisplay = document.querySelector('#losses-display');
const drawsDisplay = document.querySelector('#draws-display');
const playerChoiceContainer = document.querySelector('#player-choice');
const computerChoiceContainer = document.querySelector('#computer-choice');
const outcomeContainer = document.querySelector('#outcome-container');

const choiceButtons = document.querySelectorAll('.choose-button');
// console.log(choiceButtons);

game();

function getComputerChoice() {
    let randNum = 3 * Math.random();
    randNum = Math.ceil(randNum);

    switch(randNum) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
};

function getPlayerChoice(choiceId) {
    // let playerChoice = prompt("Choose rock, paper, or scissors!");
    // playerChoice = playerChoice.toLowerCase();
    let finalPlayerChoice;
    
    if (choiceId === "rock-button") {
        finalPlayerChoice = "rock";
    } else if (choiceId === "paper-button") {
        finalPlayerChoice = "paper";
    } else if (choiceId === "scissors-button") {
        finalPlayerChoice = "scissors";
    } else {
        finalPlayerChoice = "Improper Selection!!"
    }

    return finalPlayerChoice;
}

function playRound(computerSelection, playerSelection, wins, losses, draws) {
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    draws++
                    return [`Draw! ${playerSelection} ties with ${computerSelection}!`, wins, losses, draws]
                case "paper":
                    losses++
                    return [`You Lose! ${computerSelection} beats ${playerSelection}`, wins, losses, draws]
                case "scissors":
                    wins++
                    return [`You Win!!! ${playerSelection} beats ${computerSelection}`, wins, losses, draws]
            }
        case "paper":
            switch (computerSelection) {
                case "paper":
                    draws++
                    return [`Draw! ${playerSelection} ties with ${computerSelection}!`, wins, losses, draws]
                case "scissors":
                    losses++
                    return [`You Lose! ${computerSelection} beats ${playerSelection}`, wins, losses, draws]
                case "rock":
                    wins++
                    return [`You Win!!! ${playerSelection} beats ${computerSelection}`, wins, losses, draws]
            }
        case "scissors":
            switch (computerSelection) {
                case "scissors":
                    draws++
                    return [`Draw! ${playerSelection} ties with ${computerSelection}!`, wins, losses, draws]
                case "rock":
                    losses++
                    return [`You Lose! ${computerSelection} beats ${playerSelection}`, wins, losses, draws]
                case "paper":
                    wins++
                    return [`You Win!!! ${playerSelection} beats ${computerSelection}`, wins, losses, draws]
            }
        case "Improper Selection!!":
            losses++
            return [`You Lose! You made an improper selection!`, wins, losses, draws]
    };
};


function game() {
    // let playerScore = 0;
    // let computerScore = 0;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    let i = 0;
    
    // for (let i = 0; i < 10; i++) {
    choiceButtons.forEach(element => {
        element.addEventListener('click', function(e) {
            // console.log(`This is round ${i+1}`);
            i++;
            roundNumberDisplay.textContent = `Round Number: ${i+1}`;
    
            // console.log(e.target.id);

            let compChoice = getComputerChoice();
            let playChoice = getPlayerChoice(e.target.id); 
            // let playChoice = 'rock';
            let roundResult = playRound(compChoice, playChoice, wins, losses, draws);
            wins = roundResult[1];
            losses = roundResult[2];
            draws = roundResult[3];
            
            playerChoiceContainer.textContent = `Player Choice: ${playChoice}`
            computerChoiceContainer.textContent = `Computer Choice: ${compChoice}`
            winsDisplay.textContent = `Wins: ${wins}`;
            lossesDisplay.textContent = `Losses: ${losses}`;
            drawsDisplay.textContent = `Draws: ${draws}`;
            outcomeContainer.textContent = roundResult[0];
    
            // console.log(`player has chosen: ${playChoice}`);
            // console.log(`computer has chosen: ${compChoice}`);
            // console.log(roundResult);
            // console.log(`wins = ${wins} : losses = ${losses} : draws = ${draws}`);

            if (wins >= 5) {
                window.alert("You won 5 rounds! You're a winner!")
            } else if (losses >= 5) {
                window.alert("You lost 5 rounds! You're a loser!")
            }

        })
    })


    // }
};




