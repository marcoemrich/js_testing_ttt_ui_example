import React, { useState } from "react";
import { Cell, positionToString } from "./Cell";
const BoardModel = require("../domain/Board");

export const Board = ({ board, clickAtCell }) => {
  return (
    <div className="board">
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
