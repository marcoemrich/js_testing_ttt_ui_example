import React from "react";
const BoardModel = require("../domain/Board");
const PlayerModel = require("../domain/Player");
import { Board, positionfromString } from "./Board";
import { Player } from "./Player";

export const Game = () => {
  const [board, setBoard] = React.useState(BoardModel.create());
  const [currentPlayer, setCurrentPlayer] = React.useState(PlayerModel.X);
  const [names, setNames] = React.useState({ X: "Bob", O: "Alice" });
  const [messages, setMessages] = React.useState([]);

  const clickAtCell = (pos) => {
    setMessages(messages.concat([names[currentPlayer] + " sets " + currentPlayer + " on " + pos]));
    setBoard(BoardModel.mark(currentPlayer, positionfromString(pos), board));
    setCurrentPlayer(PlayerModel.opponent(currentPlayer));
  };

  return (
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
      <ul id="message-box">
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </>
  );
};
