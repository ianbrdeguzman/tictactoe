import Game from './Game.js';
import GameUI from './GameUI.js';

let game = new Game();
const ui = new GameUI(document.querySelector('#app'));

ui.onTileClick = function (i) {
    game.makeMove(i);
    ui.update(game);
};

ui.onResetClick = function () {
    game = new Game();
    ui.update(game);
};

ui.update(game);
