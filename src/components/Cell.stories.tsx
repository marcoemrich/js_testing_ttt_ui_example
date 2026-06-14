import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import "../main.css";
import { Cell } from "./Cell";

const meta = {
  title: "Tic Tac Toe/Cell",
  component: Cell,
  args: {
    position: { x: 1, y: 2 },
  },
  argTypes: {
    owner: {
      control: "inline-radio",
      options: ["X", "O", " "],
    },
  },
} satisfies Meta<typeof Cell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const X: Story = {
  args: {
    owner: "X",
    position: { x: 1, y: 2 },
    onClick: (nr) => console.log(nr),
  },
};

export const O: Story = {
  args: {
    owner: "O",
    position: { x: 1, y: 2 },
    onClick: (nr) => console.log(nr),
  },
};

export const Empty: Story = {
  args: {
    owner: " ",
    position: { x: 1, y: 2 },
    onClick: (nr) => console.log(nr),
  },
};

export const Clickable: Story = {
  render: () => {
    const [owner, setOwner] = React.useState(" ");
    return <Cell owner={owner} onClick={() => setOwner("X")} position={{ x: 1, y: 2 }} />;
  },
};
