const Player = {
  X: "X",
  O: "O",
};

const rowsOrCols = (rows = cols = [0, 1, 2]);
const posToString = (pos) => `${pos.x}/${pos.y}`;
const winnerOfTwoCells = (symbol1, symbol2) => (symbol1 === symbol2 ? symbol1 : undefined);

const or = (a, b) => a || b;

const create = () => ({});
const mark = (player, pos, board) => ({ ...board, [posToString(pos)]: player });
const at = (pos, board) => board[posToString(pos)];

const winByDiag1 = (board) =>
  rows.map((xy) => at({ x: xy, y: xy }, board)).reduce(winnerOfTwoCells);

const winByDiag2 = (board) =>
  rows.map((xy) => at({ x: 2 - xy, y: xy }, board)).reduce(winnerOfTwoCells);

const winByRowY = (y, board) => cols.map((x) => at({ x, y }, board)).reduce(winnerOfTwoCells);

const winByColX = (x, board) => rows.map((y) => at({ x, y }, board)).reduce(winnerOfTwoCells);

const winByRow = (board) => winByRowOrCol(winByRowY, board);
const winByCol = (board) => winByRowOrCol(winByColX, board);
const winByRowOrCol = (winByRowOrColXY, board) =>
  rowsOrCols.map((xOrY) => winByRowOrColXY(xOrY, board)).reduce(or);

const winner = (board) =>
  [winByRow, winByCol, winByDiag1, winByDiag2]
    .map((winCondition) => winCondition(board))
    .reduce(or);

module.exports = { create, mark, at, winner };
