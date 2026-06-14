import React from "react";
import * as BoardModel from "../domain/Board";
import type { Board as BoardData, Position } from "../domain/Board";
import { Cell, positionToString } from "./Cell";

export const positionfromString = (str: string) => ({
  x: str.split("|")[0],
  y: str.split("|")[1],
});

type BoardProps = {
  board: BoardData;
  clickAtCell?: (pos: Position) => void;
};

export const Board = ({ board, clickAtCell }: BoardProps) => (
  <div className="board" data-testid="board">
    {BoardModel.positions().map((pos) => (
      <Cell
        key={positionToString(pos)}
        position={pos}
        owner={BoardModel.at(pos, board)}
        onClick={(pos) => clickAtCell?.(pos)}
      />
    ))}
  </div>
);
