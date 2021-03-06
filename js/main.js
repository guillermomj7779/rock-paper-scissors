let playerScore = 0;
let compScore = 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;
document.getElementById('reset').onclick = resetGame;

function playRock() {
    play('✊');
}

function playPaper() {
    play('🖐');
}

function playScissors() {
    play('✌');
}

function getCompChoice() {
    let choices = ['✊', '🖐', '✌'];
    let compChooses = choices[Math.floor(Math.random() * choices.length)];
    return compChooses;
}

function play(userPlay) {
    let compChoice = getCompChoice();
    document.getElementById('result').innerHTML = `YOU: 🧠${userPlay}   ${compChoice}💻 :COMPUTER`

    if (userPlay == '✊') {
        if (compChoice == '✊') {
            document.getElementById('winner').innerHTML = "It's a tie! 😮";
        } else if (compChoice == '🖐') {
            document.getElementById('winner').innerHTML = "Computer wins! 😞";
            compScore++;
        } else if (compChoice == '✌') {
            document.getElementById('winner').innerHTML = "You win! 😀";
            playerScore++;
        }

    } else if (userPlay == '🖐') {
        if (compChoice == '🖐') {
            document.getElementById('winner').innerHTML = "It's a tie! 😮";
        } else if (compChoice == '✊') {
            document.getElementById('winner').innerHTML = "You win! 😀";
            playerScore++;
        } else if (compChoice == '✌') {
            document.getElementById('winner').innerHTML = "Computer wins! 😞";
            compScore++;
        }
    } else if (userPlay == '✌') {
        if (compChoice == '✌') {
            document.getElementById('winner').innerHTML = "It's a tie! 😮";
        } else if (compChoice == '✊') {
            document.getElementById('winner').innerHTML = "Computer wins! 😞";
            compScore++;
        } else if (compChoice == '🖐') {
            document.getElementById('winner').innerHTML = "You win! 😀";
            playerScore++;
        }
    }

    gameVictory()
    gameOver()
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = compScore;
};

function resetGame() {
    playerScore = 0;
    compScore = 0;
    document.querySelector("#gamebox").className = "gamebox"
    document.getElementById('result').innerHTML = ''
    document.getElementById('winner').innerHTML = ''
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = compScore;
    document.getElementById('rock').onclick = playRock;
    document.getElementById('paper').onclick = playPaper;
    document.getElementById('scissors').onclick = playScissors;
};

function gameVictory() {
    document.getElementById('playerScore').value = playerScore;

    if (playerScore === 5) {
        document.querySelector("#gamebox").className = "gameVictory"
        document.getElementById('winner').innerText = "Congratulations, you won the game! 👍";
        document.getElementById('rock').onclick = '';
        document.getElementById('paper').onclick = '';
        document.getElementById('scissors').onclick = '';
    }
}

function gameOver() {
    document.getElementById('compScore').value = compScore;

    if (compScore === 5) {
        document.querySelector("#gamebox").className = "gameOver"
        document.getElementById('winner').innerText = "You lost the game! 👎";
        document.getElementById('rock').onclick = '';
        document.getElementById('paper').onclick = '';
        document.getElementById('scissors').onclick = '';
    }

}