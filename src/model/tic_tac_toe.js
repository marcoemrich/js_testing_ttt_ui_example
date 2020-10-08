import * as R from 'ramda'

export default class TicTacToe {
  constructor(fields, currentPlayer = 'X') {
    this.fields = fields;
    this.currentPlayer = currentPlayer;
  };

  static startWithSize(width, height) {
    return new TicTacToe(Array(width * height).fill(" "));
  }

  oppositePlayer(player) {
    return player === 'X' ? 'O' : 'X';
  }

  toString() { return this.fields.join('') };

  mark(cellNr) {
    if (R.nth(cellNr, this.fields) !== ' ') return this;

    return new TicTacToe(
      R.update(cellNr, this.currentPlayer, this.fields),
      this.oppositePlayer(this.currentPlayer)
    );
  }
}