import * as R from "ramda";
import React from "react";
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";

import { Cell } from "./Cell";
import { Board } from "./Board";
import TicTacToe from "../model/tic_tac_toe";

describe("Board", () => {
  it("should have the right number of cells", () => {
    const wrapper = mount(<Board game={TicTacToe.startWithSize(4, 4)} />);
    // console.log(wrapper.debug());
    expect(wrapper.find(Cell).length).toEqual(16);
  });

  it("should have the right number of cells", () => {
    const { container, getAllByTestId } = render(<Board game={TicTacToe.startWithSize(4, 4)} />);
    expect(getAllByTestId("cell").length).toEqual(16);
  });
});
