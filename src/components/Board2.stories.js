import React from "react";

import { Board } from "./Board";
const BoardModel = require("../domain/Board");
import "../main.css";

export default {
  title: "Tic Tac Toe/Board",
  component: Board,
};

const Template = (args) => <Board board={BoardModel.create()} {...args} />;

export const Empty = Template.bind({});
Empty.args = {};
