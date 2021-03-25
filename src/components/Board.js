import React from "react";
import * as BoardModel from "../domain/Board";
import { Cell, positionToString } from "./Cell";

export const positionfromString = (str) => ({
  x: str.split("|")[0],
  y: str.split("|")[1],
});

export const Board = ({ board, clickAtCell }) => (
  <div className="board" data-testid="board">
    {BoardModel.positions().map((pos) => (
      <Cell
        key={positionToString(pos)}
        position={pos}
        owner={BoardModel.at(pos, board)}
        onClick={(pos) => clickAtCell(pos)}
      />
    ))}
  </div>
);
