import React from "react";
const BoardModel = require("../domain/Board");
const PlayerModel = require("../domain/Player");
import { Board, positionfromString } from "./Board";
import { Player } from "./Player";
import { MessageBox } from "./MessageBox";

export const Game = () => {
  const [board, setBoard] = React.useState(BoardModel.create());
  const [currentPlayer, setCurrentPlayer] = React.useState(PlayerModel.X);
  const [names, setNames] = React.useState({ X: "Bob", O: "Alice" });
  const [messages, setMessages] = React.useState([]);

  const winner = () => BoardModel.winner(board);

  const clickAtCell = (pos) => {
    setMessages(messages.concat([names[currentPlayer] + " sets " + currentPlayer + " on " + pos]));
    setBoard(BoardModel.mark(currentPlayer, positionfromString(pos), board));
    setCurrentPlayer(PlayerModel.opponent(currentPlayer));
  };

  return winner() ? (
    <h1 data-testid="win-message">
      {names[winner()]} wins the game with {winner()}
    </h1>
  ) : (
    <>
      <Player
        label="Player X"
        name={names.X}
        onChange={(e) => setNames({ ...names, X: e.target.value })}
      />
      <br />
      <Player
        label="Player O"
        name={names.O}
        onChange={(e) => setNames({ ...names, O: e.target.value })}
      />
      <br />
      <Board board={board} clickAtCell={clickAtCell} />
      <br />
      <MessageBox messages={messages} />
    </>
  );
};
