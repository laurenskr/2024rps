console.log("Hello there!");

function getComputerChoice() {
    let strChoice;
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
            break 
    }
    return strChoice

}
console.log(getComputerChoice())

