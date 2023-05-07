
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

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors!");
    playerChoice = playerChoice.toLowerCase();
    let finalPlayerChoice;
    
    if (playerChoice.toLowerCase() === "rock") {
        finalPlayerChoice = "rock";
    } else if (playerChoice.toLowerCase() === "paper") {
        finalPlayerChoice = "paper";
    } else if (playerChoice.toLowerCase() === "scissors") {
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
    let playerScore = 0;
    let computerScore = 0;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    
    for (let i = 0; i < 5; i++) {
        console.log(`This is round ${i+1}`);
        let compChoice = getComputerChoice();
        let playChoice = getPlayerChoice(); 
        let roundResult = playRound(compChoice, playChoice, wins, losses, draws);
        wins = roundResult[1];
        losses = roundResult[2];
        draws = roundResult[3];

        console.log(`player has chosen: ${playChoice}`);
        console.log(`computer has chosen: ${compChoice}`);
        console.log(roundResult);
        console.log(`wins = ${wins} : losses = ${losses} : draws = ${draws}`);
    }
};
