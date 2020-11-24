import React from "react";

export const positionToString = (pos) => `${pos.x}|${pos.y}`;

export const Cell = ({ owner = "", position, onClick }) => (
  <button
    role="cell"
    className={`cell cell_${positionToString(position)}`}
    data-position={positionToString(position)}
    onClick={(e) => onClick(position)}
    data-testid={`cell_${positionToString(position)}`}
  >
    {owner}
  </button>
);
