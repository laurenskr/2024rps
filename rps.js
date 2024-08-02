let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");

const rockbtnbtn = document.querySelector("#rockbtn");
rockbtn.addEventListener("click", function() { playRound("rock", getComputerChoice())});

const paperbtn = document.querySelector("#paperbtn");
paperbtn.addEventListener("click", function() { playRound("paper", getComputerChoice())});

const scissorsbtnbtn = document.querySelector("#scissorsbtn");
scissorsbtn.addEventListener("click", function() { playRound("scissors", getComputerChoice())});

function getComputerChoice() {
    let intChoice = Math.floor(Math.random()*3);
    switch (intChoice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
    return strChoice
}

// function getHumanChoice() {
//     let input = prompt("Rock, paper or scissors?").toLowerCase();
//     if (input != "rock" && input != "paper" && input != "scissors") {
//         alert("Try again!");
//         getHumanChoice();
//     } 
//     return input
//     }

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     for (let i=0; i<5; i++) {
//         playRound(getHumanChoice(),getComputerChoice());
//     }
    
//     announceWinner(humanScore, computerScore)

function playRound(humanChoice, computerChoice) {
    const humanScoreField = document.querySelector("#humanScore");
    const computerScoreField = document.querySelector("#computerScore");
    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                results.innerText = "Tie!"
                break;
            case "paper":
                results.innerText = "You lose! Paper beats rock!";
                computerScore++;
                computerScoreField.innerText = computerScore;
                break;
            case "scissors":
                results.innerText = "You win! Rock beats scissors!";
                humanScoreField.innerText = ++humanScore;
                break;
        }
        
    } else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                results.innerText = "You win! Paper beats rock!";
                humanScoreField.innerText = ++humanScore;
                break;
            case "paper":
                results.innerText = "Tie!";
                break;
            case "scissors":
                results.innerText = "You lose! Scissors beats paper!";
                computerScore++;
                computerScoreField.innerText = computerScore;
                break;
        }
        
    } else if (humanChoice== "scissors") {
            switch (computerChoice) {
                case "rock":
                    results.innerText = "You lose! Rock beats scissors!";
                    computerScore++;
                    computerScoreField.innerText = computerScore;
                    break;
                case "paper":
                    results.innerText = "You win! Scissors beats paper!";
                    humanScoreField.innerText = ++humanScore;
                    break;
                case "scissors":
                    results.innerText = "Tie!";
                    break;
            }
            
    }
    if (humanScore == 5) {
        humanScoreField.innerText = "WINNERWINNERWINNERWINNER";
        computerScoreField.innerText = "LOSERLOSERLOSERLOSERLOSER";
        humanScore = 0;
        computerScore = 0;
        results.innerText = "Pick one to start a new match"
        alert("You Won The Match!");
    } else if (computerScore == 5) {
        humanScoreField.innerText = "LOSERLOSERLOSERLOSERLOSER";
        computerScoreField.innerText = "WINNERWINNERWINNERWINNER";
        humanScore = 0;
        computerScore = 0;
        results.innerText = "Pick one to start a new match"
        alert("You Lost The Match!");
    }
}

// }

// function announceWinner(humanScore, computerScore) {
//     humanScore > computerScore ? console.log(`You beat the computer ${humanScore} - ${computerScore}`) :
//     console.log(`The computer beat you ${computerScore} - ${humanScore}`)
// }
// playGame();