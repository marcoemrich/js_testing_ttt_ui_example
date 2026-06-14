import React from "react";
import "../main.css";
import { Player } from "./Player";

export default {
  title: "Tic Tac Toe/Player",
  component: Player,
  argTypes: {
    onChange: { action: "changed" },
  },
};

const Template = ((args) => {
  const [name, setName] = React.useState("Bob");
  return <Player label={args.label} onChange={(e) => setName(e.target.value)} name={name} />;
}).bind({});

export const Default = Template.bind({});

Default.args = {
  label: "X",
};
