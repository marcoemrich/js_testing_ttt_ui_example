import React from "react";
import { fireEvent, render, screen, container, prettyDOM } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import * as BoardModel from "../domain/Board";
import { Player } from "../domain/Player";
import { Board } from "./Board";

describe("Board (UI)", () => {
  it("should have the right number of cells", () => {
    const { getAllByRole, container, debug } = render(<Board board={BoardModel.create()} />);
    // debug();
    // const board = container.querySelector(".board");
    const board = container.firstChild;
    // console.log(board.innerHTML);
    // console.log(prettyDOM(board));

    const buttons = getAllByRole("cell");
    // const buttons = container.querySelectorAll("button");

    // buttons.forEach((n) => console.log(n.outerHTML));

    expect(buttons).toHaveLength(9);
  });

  it("should show marks of Players (react-testing-library)", () => {
    const board = BoardModel.mark(Player.X, { x: 2, y: 2 }, BoardModel.create());
    const { getByTestId, debug } = render(<Board board={board} />);
    // debug();
    expect(getByTestId("cell_2|2")).toHaveTextContent("X");
  });
});

/*

Query-Methods

 * get
 * query (null instead of exception)
 * find (async)


 * AllBy
 * By

 * Role,


Alternative

 * container

Helper

 * plain: outerHTML, textContent, dataset, getAttribute
 * prettyDOM
 * debug
 * screen

Events

 * fireEvent

Async

 * waitFor
 * act


*/
