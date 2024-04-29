// Rock Paper Scissors Javascript Logic
console.log("Welcome to Rock, Paper, Scissors");

// Global variable to track the score of the game
var humanScoreNum = 0;
var computerScoreNum = 0;

function getComputerChoice() {
    //picks a number between 0 and 2 (3 options)
    const number = Math.floor(Math.random() * 3);
    var choice = "NA";
    if (number == 0) {
        choice = "rock";
    } else if (number == 1) {
        choice = "paper";
    } else if (number == 2) {
        choice = "scissors";
    } else {
        console.error("Computer was not able to pick an option");
    }
    return choice;
}

function getHumanChoice() {
    //value x used for while loop
    var x = 1;
    //prompt the user to enter rock paper or scissors
    choice = String(window.prompt("Please type 'rock', 'paper' or 'scissors'"));
    //toLowerCase is used to convert user choice to lower case 
    choice = choice.toLowerCase();
    while (x) {
        console.log("You have selected: " + choice);
        if ((choice == "rock") || (choice == "paper") || (choice == "scissors")) {
            return choice;
            x = 0;
            // if the user does not enter a valid answer, it will loop until valid answer is given
        } else {
            x = 1;
            choice = window.prompt("INCORRECT VALUE! Please type 'rock', 'paper' or 'scissors'");
            choice = choice.toLowerCase();
        }
    }
}

function endGame(){
    const resultspage = document.querySelector("#results");
    if(humanScoreNum >= 5) {
        resultspage.textContent = ("You got a score of 5! YOU WIN!");
        resultspage.setAttribute("style", "color: green;");
    } else if(computerScoreNum >= 5){
        resultspage.textContent = ("Computer got a score of 5! YOU LOSE!");
        resultspage.setAttribute("style", "color: red;");
    }
}



function playRound(humanChoice, computerChoice) {

    const resultspage = document.querySelector("#results");
    const humanScore = document.querySelector("#humanScore");
    const computerScore = document.querySelector("#computerScore");



    if (humanChoice == computerChoice) {
        resultspage.textContent = ("It's a TIE! You both picked the same option, no points given!");
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        resultspage.textContent=("Paper beats Rock. Computer gets a point!");
        computerScoreNum++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        resultspage.textContent=("Rock beats Scissors. You get a point!");
        humanScoreNum++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        resultspage.textContent=("Paper beats Rock. You get a point!");
        humanScoreNum++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        resultspage.textContent=("Scissors beats Paper. Computer gets a point!");
        computerScoreNum++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        resultspage.textContent=("Scissors beats Paper. You get a point!");
        humanScoreNum++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        resultspage.textContent=("Rock beats Scissors. Computer gets a point!");
        computerScoreNum++;
    } else {
        console.error("An error has ocurred! please play again!")
    }

    var humanScoreVariable = "Your score is: " + humanScoreNum;
    var computerScoreVariable = "Computer score is: " + computerScoreNum;

    humanScore.textContent =  humanScoreVariable;
    computerScore.textContent =  computerScoreVariable;
}


//Javascript Button Selectors 
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //checking if any player has reached a score of 5, if not they can continue to play
        if(humanScoreNum >= 5 || computerScoreNum >= 5){
            endGame();
        } else {
            const computerSelection = getComputerChoice();
            playRound(button.id, computerSelection);
        }
        //checking score again after round has been played to check if the game is over
        if(humanScoreNum >= 5 || computerScoreNum >= 5){
            endGame();
        }
    })
})