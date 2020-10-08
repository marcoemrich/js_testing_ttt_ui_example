import React from 'react'

export const Cell = ({ owner = '', cellNr, onClick } = { owner: '' }) =>
   <button
    className={`cell cell_${cellNr}`}
    data-cell-nr={cellNr}
    onClick={onClick}
    data-testid="cell">
    {owner}
  </button>;
