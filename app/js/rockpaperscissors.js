////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expresion that operates on a variable called 'move'
    // If a 'move' has a value, your expression should evaluate to that value.
    // However, if 'move' is not specified / is null, your expression should equal 'getInput()'.
    return move || getInput();
}

    

function getComputerMove(move) {
    // Write an expression that operates on a variable called 'move'
    // If a 'move' has a value, your expression should evaluate to that value.
    // However, if 'move' is not specified / is null, your expression should equal 'randomPlay()'
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
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
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");    
    while (playerWins <= 4 && computerWins <= 4) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);
            if (winner === "Player") {
                playerWins += 1;
            } 
            else if (winner === "Computer") {
                computerWins += 1;
            }
            else if (winner === "Tie") {
                console.log("It is a draw");
            }
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
        console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    if (playerWins === 5) {
        console.log("Player Wins");
    }
    else if (computerWins === 5) {
        console.log("Computer Wins");
    }
}
return [playerWins, computerWins];
}

playToFive();
