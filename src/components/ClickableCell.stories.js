import React, { useState } from "react";
import "../main.css";
import { Cell } from "./Cell";

export default {
  title: "Tic Tac Toe/Cell",
  component: Cell,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
