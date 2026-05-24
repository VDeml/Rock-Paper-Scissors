// set scores to 0
let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    let number = Math.random();
    //console.log(`Number generated is ${number}`);
    let symbol;
    if (number < 0.333)
        symbol = "rock";
    else if (number < 0.666)
        symbol = "paper";
    else
        symbol = "scissors";
    //console.log(`Computer picks ${symbol}`);
    return symbol;
}


// get player's input
function getHumanChoice() {
    let input = prompt('Please type in one of "rock", "paper" or "scissors"')
    return input;
}

function playRound(computerChoice, humanChoice) {
    let hum_input = humanChoice.toLowerCase();
    // case for tie
    if (hum_input === computerChoice) {
        console.log("It's a tie!");
    }
    // case for human victories
    else if (hum_input === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if (hum_input === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat paper.");
        humanScore++;
    }
    else if (hum_input === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock");
        humanScore++;
    }
    // cases for Computer victories
    else if (hum_input === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
    else if (hum_input === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat paper.");
        computerScore++;
    }
    else if (hum_input === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;
    }

}

function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (humanScore === computerScore)
        console.log("Another tie!")
    else if (humanScore > computerScore)
        console.log("Humans won!")
    else
        console.log("Beaten by a machine!")
    console.log(`Human: ${humanScore}, computer: ${computerScore}`)
}

playGame()