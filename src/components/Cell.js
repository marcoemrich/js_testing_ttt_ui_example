import React from "react";

export const positionToString = (pos) => `${pos.x}|${pos.y}`;

export const Cell = ({ owner = "", position, onClick }) => (
  <button
    className={`cell cell_${position}`}
    data-position={position}
    onClick={(e) => onClick(position)}
    data-testid={`cell_${position}`}
  >
    {owner}
  </button>
);
