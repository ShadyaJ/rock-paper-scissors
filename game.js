// Score
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// Player Choice (buttons)
document.querySelectorAll('.player-choice-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const playerChoice = e.target.dataset.choice;
        playRound(playerChoice, getComputerChoice());
    });
});

// Functions
function playRound(playerChoice, computerChoice) {
    const gameInfo = document.querySelector('#game-info');
    
    if(playerChoice === computerChoice) {
        drawScore += 1;
        gameInfo.innerText = `Both chose ${playerChoice}. It\'s a tie! No one wins.`;
        document.querySelector('#draw-score').innerText = drawScore;
    } else if((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissors' && computerChoice == 'paper')) {
        playerScore += 1;
        gameInfo.innerText = `You chose ${playerChoice} and computer chose ${computerChoice}. You win!`;
        document.querySelector('#player-score').innerText = playerScore;
    } else {
        computerScore += 1;
        gameInfo.innerText = `You chose ${playerChoice} and computer chose ${computerChoice}. Computer wins!`;
        document.querySelector('#computer-score').innerText = computerScore;
    }

    checkScore();
}

function checkScore() {
    if (playerScore >= 5) {
        endGame();
        setTimeout(() => {
            window.location.href = 'pages/win.html';
        }, 2000);
    } else if (computerScore >= 5) {
        endGame();
        setTimeout(() => {
            window.location.href = 'pages/lose.html';
        }, 2000);
    }
}

function endGame() {
    document.querySelectorAll('.player-choice-btn').forEach((btn) => {
        btn.disabled = true;
    });
}

function getComputerChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomNum];
}
