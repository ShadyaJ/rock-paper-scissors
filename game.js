const validChoices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomNum];
}

function getHumanChoice() {
    let userInput;

    while (true) {
        userInput = prompt("Please type one of the following: Rock, Paper, or Scissors");

        // Handle prompt cancellation
        if (userInput === null) {
            return null;
        }

        userInput = userInput.toUpperCase();

        if (validChoices.includes(userInput)) {
            return userInput;
        } else {
            alert("Invalid choice. Please try again.");
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if(humanChoice === computerChoice) {
            console.log(`Both chose ${humanChoice}. It\'s a tie! No one wins.`);
        } else if((humanChoice == 'ROCK' && computerChoice == 'SCISSORS') || (humanChoice == 'PAPER' && computerChoice == 'ROCK') || (humanChoice == 'SCISSORS' && computerChoice == 'PAPER')) {
            console.log(`Human chose ${humanChoice} and computer chose ${computerChoice}. Human wins!`);
            humanScore += 1;
        } else {
            console.log(`Human chose ${humanChoice} and computer chose ${computerChoice}. Computer wins!`);
            computerScore += 1;
        }
    }

    for(i = 0; (humanScore + computerScore) < 5; i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        // Stop the game if user cancels prompt
        if (humanChoice === null) {
            console.log("Game canceled by the user.");
            return;
        }
    
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore){
        console.log(`Human Score: ${humanScore}. Computer Score: ${computerScore}. Human won the game!`);
    } else {
        console.log(`Human Score: ${humanScore}. Computer Score: ${computerScore}. Computer won the game!`);
    }
}

playGame();
