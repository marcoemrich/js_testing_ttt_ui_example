import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Board } from "./Board";
import * as BoardModel from "../domain/Board";
import "../main.css";

const meta = {
  title: "Tic Tac Toe/Board",
  component: Board,
  args: {
    board: BoardModel.create(),
  },
} satisfies Meta<typeof Board>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: () => <Board board={BoardModel.create()} />,
};

export const ClickableBoardTest: Story = {
  render: () => {
    const [board, setBoard] = React.useState(BoardModel.create());

    return (
      <Board board={board} clickAtCell={(pos) => setBoard(BoardModel.mark("X", pos, board))} />
    );
  },
};
