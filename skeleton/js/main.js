const View = require('./ttt-view.js');
const Game = require('../../solution/game.js');

$( () => {
  let $el = $('.ttt');

  let game = new Game();
  let view = new View(game, $el);
  view.setupBoard();

  view.bindEvents();

});
