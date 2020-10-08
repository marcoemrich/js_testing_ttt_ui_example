const Player = {
  X: "X",
  O: "O",
};

const rowsOrCols = (rows = cols = [0, 1, 2]);

const posToString = (pos) => `${pos.x}/${pos.y}`;

const create = () => ({});
const mark = (player, pos, board) => ({ ...board, [posToString(pos)]: player });
const at = (pos, board) => board[posToString(pos)];

const or = (a, b) => a || b;

const winner = (board) =>
  [winByRow, winByCol, winByDiag1, winByDiag2]
    .map((winCondition) => winCondition(board))
    .reduce(or);

const winByRow = (board) => rows.map((y) => winByRowY(y, board)).reduce(or);
const winByCol = (board) => cols.map((x) => winByColX(x, board)).reduce(or);

const winByRowY = (y, board) =>
  cols.map((x) => at({ x, y }, board)).reduce((leader, v) => (leader === v ? leader : undefined));

const winByColX = (x, board) =>
  rows.map((y) => at({ x, y }, board)).reduce((leader, v) => (leader === v ? leader : undefined));

const winByDiag1 = (board) => {
  console.log(board);
  return rows
    .map((xy) => at({ x: xy, y: xy }, board))
    .reduce((leader, v) => (leader === v ? leader : undefined));
};

const winByDiag2 = (board) => {
  console.log(board);
  return rows
    .map((xy) => at({ x: 2 - xy, y: xy }, board))
    .reduce((leader, v) => (leader === v ? leader : undefined));
};

describe("posToString", () => {
  expect(posToString({ x: 5, y: 4 })).toEqual("5/4");
});

describe("Board", () => {
  it("should mark an Player at position with mark", () => {
    const board = create();
    const resultBoard = mark(Player.X, { x: 0, y: 0 }, board);
    expect(at({ x: 0, y: 0 }, resultBoard)).toEqual(Player.X);
  });

  it("should start with player undefined at every postion", () => {
    const board = create();
    expect(at({ x: 0, y: 0 }, board)).toEqual(undefined);
    expect(at({ x: 2, y: 2 }, board)).toEqual(undefined);
  });
});

describe("Board.winner", () => {
  test("there is no winner for an empty board", () => {
    const board = create();
    expect(winner(board)).toEqual(undefined);
  });

  it("should return the winning player for rows", () => {
    const board = create();
    const resultBoard = [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ].reduce((board, pos) => mark(Player.X, pos, board), board);

    expect(winner(resultBoard)).toEqual(Player.X);
  });

  it("should return the winning player for cols", () => {
    const board = create();
    const resultBoard = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
    ].reduce((board, pos) => mark(Player.X, pos, board), board);

    expect(winner(resultBoard)).toEqual(Player.X);
  });
  it("should return the winning player for diagonal1", () => {
    const board = create();
    const resultBoard = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ].reduce((board, pos) => mark(Player.X, pos, board), board);

    expect(winner(resultBoard)).toEqual(Player.X);
  });

  it("should return the winning player for diagonal2", () => {
    const board = create();
    const resultBoard = [
      { x: 2, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 2 },
    ].reduce((board, pos) => mark(Player.O, pos, board), board);

    expect(winner(resultBoard)).toEqual(Player.O);
  });
});
