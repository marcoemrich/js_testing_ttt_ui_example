import * as R from "ramda";
import React from "react";
import { render, screen, prettyDOM, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Cell } from "./Cell";

describe("Cell (UI)", () => {
  it("should render with a button with owner", () => {
    const { container, debug } = render(<Cell owner="X" position={{ x: 1, y: 0 }} />);
    // debug();
    // console.log(JSON.stringify(container.firstChild.textContent));
    expect(container.firstChild.textContent).toEqual("X");
  });

  it("should render with a button the given position", () => {
    const { container } = render(<Cell position={{ x: 1, y: 0 }} />);
    expect(container.firstChild.dataset.position).toEqual("1|0");
  });

  it("should call onClick handler", () => {
    const handler = jest.fn();
    // show error with shallow
    const { container } = render(<Cell onClick={handler} position={{ x: 1, y: 0 }} />);
    fireEvent.click(container.firstChild);
    expect(handler).toBeCalledWith({ x: 1, y: 0 });
  });
});
