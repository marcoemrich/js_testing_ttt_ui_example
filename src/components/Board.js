import React, { useState } from "react";
import { Cell } from "./Cell";
const BoardModel = require("../domain/Board");

const positionToString = (pos) => `${pos.x}|${pos.y}`;

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
