class GameUI {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        		<header>
            		    <div class="player-turn">
                		    Player X's turn
            		    </div>
            		    <div class="game-status">
                		    In Progress
            		    </div>
            		    <button class="restart">
                		    <i class="fas fa-redo-alt"></i>
            		    </button>
                        <button>
                            <a href="https://github.com/ianbrdeguzman/tictactoe"><i class="fab fa-github-square"></i></a>
                        </button>
        		</header>
        		<div class='board'>
            		    <div class="board-tile" data-index="0"></div>
            		    <div class="board-tile" data-index="1"></div>
            		    <div class="board-tile" data-index="2"></div>
            		    <div class="board-tile" data-index="3"></div>
            		    <div class="board-tile" data-index="4"></div>
            		    <div class="board-tile" data-index="5"></div>
            		    <div class="board-tile" data-index="6"></div>
            		    <div class="board-tile" data-index="7"></div>
            		    <div class="board-tile" data-index="8"></div>
        		</div>
		    `;
        this.onTileClick = undefined;
        this.onResetClick = undefined;

        this.root.querySelectorAll('.board-tile').forEach((tile) => {
            tile.addEventListener('click', () => {
                this.onTileClick(tile.dataset.index);
            });
        });

        this.root.querySelector('.restart').addEventListener('click', () => {
            this.onResetClick();
        });
    }
    update(game) {
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }
    updateTurn(game) {
        this.root.querySelector(
            '.player-turn'
        ).textContent = `Player ${game.player}'s turn`;
    }
    updateStatus(game) {
        let status = `In Progress`;
        if (game.findWinningCombination()) {
            status = `${game.player} is the Winner!`;
        } else if (!game.isInProgress()) {
            status = `It's a tie!`;
        }
        this.root.querySelector('.game-status').textContent = status;
    }
    updateBoard(game) {
        const winningCombination = game.findWinningCombination();

        for (let i = 0; i < game.board.length; i++) {
            const tile = this.root.querySelector(
                `.board-tile[data-index="${i}"]`
            );

            tile.classList.remove('winner');
            tile.textContent = game.board[i];

            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add('winner');
            }
        }
    }
}

export default GameUI;
