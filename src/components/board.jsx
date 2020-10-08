import React, {useState} from 'react'
import {Cell} from "./cell.js"
import * as R from 'ramda'

const mapIndexed = R.addIndex(R.map);

export const Board = props => {
  const [state, setState] = useState(props.game);
  const handleCellClick = e => setState(state.mark(Number(e.target.dataset["cellNr"])));

  return <div className="board">
      {
        mapIndexed((cellContent, i) =>
          <Cell
            key={i}
            cellNr={i}
            onClick={handleCellClick}
            owner={cellContent}
          />
          , state.fields)
      }
    </div>;
};
