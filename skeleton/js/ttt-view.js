var View = function (game, $el) {
  this.game = game;
  this.el = $el;
};

View.prototype.bindEvents = function () {
  let $square = $(".square");
  $square.on("click", event => {
    const currentTarget = event.currentTarget;
    const $currentTarget = $(currentTarget);
    this.makeMove($currentTarget);
  });
};

View.prototype.makeMove = function ($square) {
  let pos = ($square.attr("pos"));
  pos = pos.split(",").map(el=> parseInt(el));
  // console.log(pos);
  let currentPlayer = this.game.currentPlayer;

  try {
    currentPlayer = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.addClass(currentPlayer);
    $square.text(currentPlayer);
  } catch (e) {
    alert("invalid move!!");
  }



  if (this.game.winner()) {
    let $winnersSquares = $(`.${currentPlayer}`);
    $winnersSquares.addClass("winner");

    $('body').append(`<h1>Game over, ${currentPlayer} wins!!!!</h1>`);
  }
};

View.prototype.setupBoard = function () {
  for (var i = 0; i < 3; i++) {
    let $row = $("<ul></ul>");
    $row.addClass('row group');
    this.el.append($row);
    for (var j = 0; j < 3; j++) {
      let $square = $("<li></li>");
      $square.addClass('square');
      $square.attr({"pos":[i,j]});
      $row.append($square);
    }
  }
};

module.exports = View;
