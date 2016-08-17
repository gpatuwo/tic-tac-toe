var View = function (game, $el) {
  this.game = game;
  this.el = $el;
};

View.prototype.bindEvents = function () {
};

View.prototype.makeMove = function ($square) {
};

View.prototype.setupBoard = function () {
  for (var i = 0; i < 3; i++) {
    let $row = $("<ul></ul>");
    $row.addClass('row group');
    this.el.append($row);
    for (var j = 0; j < 3; j++) {
      let $square = $("<li></li>");
      $square.addClass('square');
      $row.append($square);
    }
  }
};

module.exports = View;
