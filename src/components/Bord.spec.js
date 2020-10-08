import React from "react";
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const BoardModel = require("../domain/Board");
const Player = require("../domain/Player");
import { Cell } from "./Cell";
import { Board } from "./Board";

describe("Board", () => {
  it("should have the right number of cells (enzyme)", () => {
    const wrapper = mount(<Board board={BoardModel.create()} />);
    // console.log(wrapper.debug());
    expect(wrapper.find(Cell).length).toEqual(9);
  });

  it("should have the right number of cells (react-testing-library)", () => {
    const board = BoardModel.mark(Player.X, { x: 2, y: 2 }, BoardModel.create());
    const { container, getByTestId } = render(<Board board={board} />);

    expect(getByTestId("cell_2|2")).toHaveTextContent("X");
  });
});
