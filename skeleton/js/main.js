const View = require('./ttt-view.js');
const Game = require('../../solution/game.js');

$( () => {
  let $el = $('.ttt');

  let game = new Game();
  let view = new View(game, $el);
  view.setupBoard();

  // let $rows = $('.row');
  // debugger
  // let lastrow = $rows[2];
  // let $lastrow = $(lastrow);
  // $lastrow.attr("style", "border-bottom: 3px solid black");
});
