import React from "react";
import ReactDOM from "react-dom";
import TicTacToe from './model/tic_tac_toe'
import {Board} from './components/board'


const App = document.getElementById("app");

ReactDOM.render(<Board game={TicTacToe.startWithSize(3, 3)} />, App);
