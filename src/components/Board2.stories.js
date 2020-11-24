import React, { useState } from "react";

import { Board, positionfromString } from "./Board";
const BoardModel = require("../domain/Board");
import "../main.css";

export default {
  title: "Tic Tac Toe/Board",
  component: Board,
};

export const Empty = () => <Board board={BoardModel.create()} />;

const ClickableTemplate = (args) => {
  const [board, setBoard] = React.useState(BoardModel.create());

  return <Board board={board} clickAtCell={(pos) => setBoard(BoardModel.mark("X", pos, board))} />;
};

export const ClickableBoardTest = ClickableTemplate.bind({});
