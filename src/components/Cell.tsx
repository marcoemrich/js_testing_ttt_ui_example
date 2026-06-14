import React from "react";
import type { Position } from "../domain/Board";

export const positionToString = (pos: Position) => `${pos.x}|${pos.y}`;

type CellProps = {
  owner?: string;
  position: Position;
  onClick?: (pos: Position) => void;
};

// Presentational Components
export const Cell = ({ owner = "", position, onClick }: CellProps) => (
  <button
    role="cell"
    className={`cell cell_${positionToString(position)}`}
    data-position={positionToString(position)}
    onClick={(e) => onClick?.(position)}
    data-testid={`cell_${positionToString(position)}`}
  >
    {owner}
  </button>
);
