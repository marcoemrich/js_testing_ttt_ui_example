import React from "react";
const BoardModel = require("../domain/Board");
const PlayerModel = require("../domain/Player");
import { Board } from "./Board";

const positionfromString = (str) => ({
  x: str.split("|")[0],
  y: str.split("|")[1],
});

export const Game = () => {
  const [board, setBoard] = React.useState(BoardModel.create());
  const [currentPlayer, setCurrentPlayer] = React.useState(PlayerModel.X);

  const clickAtCell = (pos) => {
    console.log(positionfromString(pos));
    setBoard(BoardModel.mark(currentPlayer, positionfromString(pos), board));
    setCurrentPlayer(PlayerModel.opponent(currentPlayer));
  };

  return <Board board={board} clickAtCell={clickAtCell} />;
};
