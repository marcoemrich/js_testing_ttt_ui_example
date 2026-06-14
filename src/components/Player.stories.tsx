import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import "../main.css";
import { Player } from "./Player";

const meta = {
  title: "Tic Tac Toe/Player",
  component: Player,
  args: {
    name: "Bob",
    onChange: () => {},
  },
  argTypes: {
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Player>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "X",
  },
  render: (args) => {
    const [name, setName] = React.useState("Bob");
    return <Player label={args.label} onChange={(e) => setName(e.target.value)} name={name} />;
  },
};
