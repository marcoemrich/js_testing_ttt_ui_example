import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import "../main.css";
import { MessageBox } from "./MessageBox";

const meta = {
  title: "Tic Tac Toe/MessageBox",
  component: MessageBox,
} satisfies Meta<typeof MessageBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithMessages: Story = {
  args: {
    messages: ["Player X moves", "Player O moves", "Player X wins!"],
  },
};

export const Empty: Story = {
  args: {
    messages: [],
  },
};
