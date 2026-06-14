import type { Player } from "./Player";

export type Position = { x: number; y: number };
export type Board = Record<string, Player>;

const cols = [0, 1, 2];
const rows = cols;
const rowsOrCols = cols;
const posToString = (pos: Position) => `${pos.x}/${pos.y}`;
const winnerOfTwoCells = (symbol1?: Player, symbol2?: Player): Player | undefined =>
  symbol1 === symbol2 ? symbol1 : undefined;

const or = (a?: Player, b?: Player): Player | undefined => a || b;

export const create = (): Board => ({});
export const mark = (player: Player, pos: Position, board: Board): Board => ({
  ...board,
  [posToString(pos)]: player,
});
export const at = (pos: Position, board: Board): Player | undefined => board[posToString(pos)];

const winByDiag1 = (board: Board) =>
  rows.map((xy) => at({ x: xy, y: xy }, board)).reduce(winnerOfTwoCells);

const winByDiag2 = (board: Board) =>
  rows.map((xy) => at({ x: 2 - xy, y: xy }, board)).reduce(winnerOfTwoCells);

const winByRowY = (y: number, board: Board) =>
  cols.map((x) => at({ x, y }, board)).reduce(winnerOfTwoCells);

const winByColX = (x: number, board: Board) =>
  rows.map((y) => at({ x, y }, board)).reduce(winnerOfTwoCells);

const winByRow = (board: Board) => winByRowOrCol(winByRowY, board);
const winByCol = (board: Board) => winByRowOrCol(winByColX, board);
const winByRowOrCol = (
  winByRowOrColXY: (xOrY: number, board: Board) => Player | undefined,
  board: Board
) => rowsOrCols.map((xOrY) => winByRowOrColXY(xOrY, board)).reduce(or);

export const winner = (board: Board): Player | undefined =>
  [winByRow, winByCol, winByDiag1, winByDiag2]
    .map((winCondition) => winCondition(board))
    .reduce(or);

export const positions = (): Position[] => [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
];
