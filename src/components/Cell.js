import React from "react";

export const Cell = ({ owner = "", position, onClick } = { owner: "" }) => (
  <button
    className={`cell cell_${position}`}
    data-position={position}
    onClick={(e) => onClick(e.target.dataset.position)}
    data-testid={`cell_cell${position}`}
  >
    {owner}
  </button>
);
