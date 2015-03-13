function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    }
        return "scissors";
    }

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    if(playerMove === computerMove) {
        return "Tie";
    } else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            return "Player";
        }
        else {
            return "Computer";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            return "Player";
        } else {
            return "Computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            return "Player";
        } else {
            return "Computer";
        }
    }
}

function playToFive() {
    console.log("Let's play Rock Paper Scissors");
    var playerWins = 0;
    var computerWins = 0;
        while (playerWins <= 4 && computerWins <= 4) {
            var playerMove = getPlayerMove();
            var computerMove = getComputerMove(randomPlay());
            var winner = getWinner(playerMove,computerMove);
             if (winner === "Player") {
                 playerWins += 1;
             }
             else if (winner === "Computer") {
                 computerWins += 1;
             }
             else if (winner === "Tie") {
                 console.log("It is a draw.");
             }
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
}
if (playerWins === 5) {
    console.log("Player Wins");
}
else if (computerWins === 5) {
    console.log("Computer Wins");
}
return [playerWins, computerWins];
}

playToFive();

// Austin Julius Kim Los Angeles March 16th 2015

