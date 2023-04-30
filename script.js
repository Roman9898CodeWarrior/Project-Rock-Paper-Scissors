const options = ['Rock', 'Scissors', 'Paper'];

let getComputerChoice = function() {
    return options[~~(Math.random() * options.length)];
};

const buttons = Array.from(document.querySelectorAll('button'));

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
        return `You Lose! ${playerSelection} beats ${playerSelection}.`;
    }
}

let cleanInterface = () => {
        res.textContent = '';
        playerScore.textContent = 0;
        compScore.textContent = 0;
}

let res = document.querySelector('.res');

let playerScore = document.querySelector('.player-score');
let compScore = document.querySelector('.comp-score');

let winner = document.querySelector('.winner');

let plSc = 0;
let cSc = 0;

buttons.forEach(button => 
    button.addEventListener("click", function () {

        if (winner.textContent == '') {
            const computerSelection = getComputerChoice();
            const Round = playRound(button.innerText, computerSelection);
            res.textContent = Round; 

            if (Round.includes('Won')) {
                plSc += 1;
                playerScore.textContent = plSc;
            } else if (Round.includes('Lose')) {
                cSc += 1;
                compScore.textContent = cSc;
            }
        }

        if (plSc == 5) {
            winner.textContent = 'You won!'
        }

        if (cSc == 5) {
            winner.textContent = 'You lose('
        }

        // if (!winner.textContent == '') {
        //     cleanInterface()
        // }
    })
)





// console.log(myScore);
// console.log(compScore);

// function game() {
//     let myScore = 0,
//         compScore = 0;
    

//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt();
//         let computerSelection = getComputerChoice();
//         let round = playRound(playerSelection, computerSelection);
//         if (round.includes('Won')) {
//             myScore ++;
//             console.log(round);
//         } else {
//             compScore ++;
//             console.log(round);
//         }
//     }

//     if (myScore > compScore) {
//         return 'You won!';
//     } else {
//         return 'You lose(';
//     }
// }


// console.log(game());


