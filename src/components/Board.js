import React, { useState } from "react";
import { Cell, positionToString } from "./Cell";
const BoardModel = require("../domain/Board");

export const positionfromString = (str) => ({
  x: str.split("|")[0],
  y: str.split("|")[1],
});

export const Board = ({ board, clickAtCell }) => {
  return (
    <div className="board" data-testid="board">
      {BoardModel.positions().map((pos) => (
        <Cell
          key={positionToString(pos)}
          position={positionToString(pos)}
          owner={BoardModel.at(pos, board)}
          onClick={(pos) => clickAtCell(pos)}
        />
      ))}
    </div>
  );
};
