const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${ROCK} for you!`);
        // return DEFAULT_USER_CHOICE;
        return;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// const add = (a, b) => a + b;

// const add2 = function(a, b) {
//     return a + b;
// }

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice ?
    RESULT_DRAW :
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK) ?
    RESULT_PLAYER_WINS :
    RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//     return RESULT_DRAW;
// } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//     return RESULT_PLAYER_WINS;
// } else {
//     return RESULT_COMPUTER_WINS;
// }


startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting....');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerSelection) {
        winner = getWinner(computerChoice, playerSelection);
    } else {
        winner = getWinner(computerChoice);
    }

    console.log(winner);
    let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
    // console.log(computerChoice);
});

// NOT related to the game

// Try to use as many parameters as we want
// const sumUp = (a, b, c, d) => {};

// Try to use an array
// const sumUp = (numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// };

// Try to use Rest operator (...)
const combine = (resultHandler, operation, ...numbers) => {
    // A function inside a function
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum);
};

// Alternative way to use Rest operator ==> arguments
// const subtractUp = function(resultHandler, ...numbers) {
//     let sum = 0;
//     for (const num of numbers) { // ==> DON'T use that
//         sum -= num;
//     }
//     resultHandler(sum);
// };

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};



combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 'asas', 10, 9); // 35
combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 10, 10, 9, -88, 100); // 47
combine(showResult.bind(this, 'The result after subtracting all numbers is: '), 'SUBTRACT', 1, 5, 10, 10, 9, -88, 100);


// const startGame = function() {
//     console.log('Game is starting....');
// };

// // function start() {
// //     console.log('Game is starting....', age);
// // }

// // const person = {
// //     name: 'Max',
// //     greet: function greet() {
// //         console.log('Hello there!');
// //     }
// // }

// // person.greet();

// // console.dir(startGame);

// // startGame();
// // startGameBtn.addEventListener('click', start);