const options = ['Rock', 'Scissors', 'Paper'];

let getComputerChoice = function() {
    return options[~~(Math.random() * options.length)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Draw again';
    }

    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return `You Won! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return `You Won! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return `You Won! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
 
function game() {
    let myScore = 0,
        compScore = 0;
    

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        if (round.includes('Won')) {
            myScore ++;
            console.log(round);
        } else {
            compScore ++;
            console.log(round);
        }
    }

    if (myScore > compScore) {
        return 'You won!';
    } else {
        return 'You lose(';
    }
}

console.log(game());



