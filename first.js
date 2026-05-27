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

function playRound(computerChoice, humanChoice) {
    let hum_input = humanChoice.toLowerCase();
    const gamePlayed = document.createElement("li");
    const humScSpan = document.querySelector("#playerScore")
    const compScSpan = document.querySelector("#computerScore")

    // case for tie
    if (hum_input === computerChoice) {
        resultList.appendChild(gamePlayed);
        gamePlayed.textContent = "It's a tie!"
        //console.log("It's a tie!");
    }
    // case for human victories
    else if (hum_input === "rock" && computerChoice === "scissors") {
        resultList.appendChild(gamePlayed);
        gamePlayed.textContent = "You win! Rock beats scissors."
        humanScore++;
        humScSpan.textContent = humanScore; 
    }
    else if (hum_input === "scissors" && computerChoice === "paper") {
        resultList.appendChild(gamePlayed);
        gamePlayed.textContent = "You win! Scissors beat paper."
        humanScore++;
        humScSpan.textContent = humanScore;
    }
    else if (hum_input === "paper" && computerChoice === "rock") {
        resultList.appendChild(gamePlayed);
        gamePlayed.textContent = "You win! Paper beats rock."
        humanScore++;
        humScSpan.textContent = humanScore;
    }
    // cases for Computer victories
    else if (hum_input === "scissors" && computerChoice === "rock") {
        resultList.appendChild(gamePlayed);
        gamePlayed.textContent = "You lose! Rock beats scissors."
        computerScore++;
        compScSpan.textContent = computerScore;
    }
    else if (hum_input === "paper" && computerChoice === "scissors") {
        resultList.appendChild(gamePlayed);
        gamePlayed.textContent = "You lose! Scissors beat paper."
        computerScore++;
        compScSpan.textContent = computerScore;
    }
    else if (hum_input === "rock" && computerChoice === "paper") {
        resultList.appendChild(gamePlayed);
        gamePlayed.textContent = "You lose! Paper beats rock."
        computerScore++;
        compScSpan.textContent = computerScore;
    }

    if (computerScore === 5) {
        alert("Computer wins!")
    }
    else if (humanScore === 5) {
        alert("Player wins!")
    }

}
/*
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
*/
const resultList = document.querySelector("ol.results");

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors")

btnRock.addEventListener("click", (event) => {
    playRound(getComputerChoice(), "rock");
});

btnPaper.addEventListener("click", (event) => {
    playRound(getComputerChoice(), "paper");
});

btnScissors.addEventListener("click", (event) => {
    playRound(getComputerChoice(), "scissors");
});



