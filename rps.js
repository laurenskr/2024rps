function getComputerChoice() {
    let strChoice ="";
    let intChoice = Math.floor(Math.random()*3);
    switch (intChoice) {
        case 0:
            strChoice = "rock";
            break;
        case 1:
            strChoice = "paper";
            break;
        case 2:
            strChoice = "scissors"
            break;
    }
    return strChoice
}

function getHumanChoice() {
    let input = prompt("Rock, paper or scissors?").toLowerCase();
    if (input != "rock" && input != "paper" && input != "scissors") {
        alert("Try again!");
        getHumanChoice();
    } 
    return input
    }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log(`You scored ${humanScore} points`)
    console.log(`The computer scored ${computerScore} points`)
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            switch (computerChoice) {
                case "rock":
                    console.log("Tie!");
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock!");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win! Rock beats scissors!");
                    humanScore++;
                    break;
            }
            
        } else if (humanChoice == "paper") {
            switch (computerChoice) {
                case "rock":
                    console.log("You win! Paper beats rock!");
                    humanScore++;
                    break;
                case "paper":
                    console.log("Tie!")
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats paper!");
                    computerScore++;
                    break;
            }
            
        } else if (humanChoice== "scissors") {
                switch (computerChoice) {
                    case "rock":
                        console.log("You lose! Rock beats scissors!");
                        computerScore++;
                        break;
                    case "paper":
                        console.log("You win! Scissors beats paper!");
                        humanScore++;
                        break;
                    case "scissors":
                        console.log("Tie!");
                        break;
                }
                
        }
        
    }

}
playGame();