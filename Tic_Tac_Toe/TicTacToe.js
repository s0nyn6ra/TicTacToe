const player1 = 'x';
const player2 = 'o';
let currentPlayer;
let gameBoard;
let gameActive = false;

function startGame() {
    currentPlayer = player1;
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    renderBoard();
}

function cellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        renderBoard();
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Player ${currentPlayer} wins!`);
            gameActive = false;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        alert('It\'s a tie!');
        gameActive = false;
    }
}

function renderBoard() {
    const boardElement = document.getElementById('board');
    console.log(boardElement)
    boardElement.innerHTML = '';

    for (let i = 0; i < gameBoard.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';

        if (gameBoard[i] === player1) {
            cell.classList.add('green-player');
        } else if (gameBoard[i] === player2) {
            cell.classList.add('red-player');
        }

        cell.textContent = gameBoard[i];
        cell.addEventListener('click', () => cellClick(i));
        boardElement.appendChild(cell);
    }
}

let player1Wins = 0;
let player2Wins = 0;

function initializeWins() {
    player1Wins = 0;
    player2Wins = 0;
    updateWinsDisplay();
}

function updateWinsDisplay() {
    const winsDisplay = document.getElementById('wins-display');
    winsDisplay.textContent = `Player 1 Wins: ${player1Wins} | Player 2 Wins: ${player2Wins}`;
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Player ${currentPlayer} wins!`);
            gameActive = false;

            // Update wins and display
            if (currentPlayer === player1) {
                player1Wins++;
            } else {
                player2Wins++;
            }
            updateWinsDisplay();
            return;
        }
    }

    if (!gameBoard.includes('')) {
        alert('It\'s a tie!');
        gameActive = false;
    }
}



// ... (existing code)

//function initializeWins() {
    //player1Wins = 0;
    //player2Wins = 0;
    ////updateWinsDisplay();
//}

//function updateWinsDisplay() {
    //const winsDisplay = document.getElementById('wins-display');
    //winsDisplay.textContent = `Player 1 Wins: ${player1Wins} | Player 2 Wins: ${player2Wins}`;
//}

// ... (existing code)
