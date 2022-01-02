// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.
// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.
// * As a user, I expect the computer to choose R, P, or S in return.
// * As a user, I want the option to play again whether I win or lose.
// * As a user, I want to see my total wins, ties, and losses after each round.

// Global Variables
var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

playGame = () => {
    // Ask user for their choice
    var userChoice = window.prompt("Enter R, P, or S:");

    // If user pressed Cancel, immediately end function
    if (!userChoice) {
        return;
    }

    // Convert to uppercase to make comparisons easier
    userChoice.toUpperCase();

    // Get random index from array of options
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    // If choices are the same, it's a tie
    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");

    // Check every win condition for the player
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You win!");

    // If above conditions failed, assume player lost
    } else {
        losses++;
        window.alert("You lost!");
    }

    // Print stats with line breaks
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    // Ask user to play again
    var playAgain = window.confirm("Play again?");

    // If user pressed OK, run the function again
    if (playAgain) {
        playGame();
    }
};

// Run the game for the first time
playGame();