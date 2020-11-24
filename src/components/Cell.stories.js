import React from "react";
import "../main.css";
import { Cell } from "./Cell";

export default {
  title: "Tic Tac Toe/Cell",
  component: Cell,
  argTypes: {
    owner: {
      control: {
        type: "inline-radio",
        options: ["X", "O", " "],
      },
    },
  },
};

const Template = (args) => <Cell {...args} />;

export const X = Template.bind({});
X.args = {
  owner: "X",
  position: { x: 1, y: 2 },
  onClick: (nr) => console.log(nr),
};
export const O = Template.bind({});
O.args = {
  owner: "O",
  position: { x: 1, y: 2 },
  onClick: (nr) => console.log(nr),
};

export const Empty = Template.bind({});
Empty.args = {
  owner: " ",
  position: { x: 1, y: 2 },
  onClick: (nr) => console.log(nr),
};

const ClickableTemplate = (args) => {
  const [owner, setOwner] = React.useState(" ");
  return <Cell owner={owner} onClick={(e) => setOwner("X")} position={{ x: 1, y: 2 }} />;
};

export const Clickable = ClickableTemplate.bind({});
