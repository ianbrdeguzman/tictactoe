class Game {
    constructor() {
        this.player = 'X';
        this.board = new Array(9).fill(null);
    }
    nextTurn() {
        this.player = this.player === 'X' ? 'O' : 'X';
    }
    makeMove(i) {
        if (!this.isInProgress()) {
            return;
        }
        if (this.board[i]) {
            return;
        }
        this.board[i] = this.player;
        if (!this.findWinningCombination()) {
            this.nextTurn();
        }
    }
    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                this.board[a] &&
                this.board[a] == this.board[b] &&
                this.board[a] == this.board[c]
            ) {
                return combination;
            }
        }
        return null;
    }
    isInProgress() {
        return this.board.includes(null) && !this.findWinningCombination();
    }
}

export default Game;
