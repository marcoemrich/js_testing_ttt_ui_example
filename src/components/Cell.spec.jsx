/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, prettyDOM, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, vi } from "vitest";

import { Cell } from "./Cell";

afterEach(cleanup);

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
    const handler = vi.fn();
    // show error with shallow
    const { container } = render(<Cell onClick={handler} position={{ x: 1, y: 0 }} />);
    fireEvent.click(container.firstChild);
    expect(handler).toBeCalledWith({ x: 1, y: 0 });
  });

  it("should call onClick handler (getByTestId)", () => {
    const handler = vi.fn();

    const { getByTestId } = render(<Cell onClick={handler} position={{ x: 1, y: 0 }} />);

    const cell = getByTestId("cell_1|0");

    fireEvent.click(cell);

    expect(handler).toBeCalledTimes(1);
    expect(handler).toBeCalledWith({ x: 1, y: 0 });
  });

  it("should not find wrong cell", () => {
    const handler = vi.fn();

    const { container, queryByTestId } = render(
      <Cell onClick={handler} position={{ x: 1, y: 1 }} />
    );

    const cell = queryByTestId("cell_1|2");

    expect(cell).not.toBeInTheDocument();
  });
});
