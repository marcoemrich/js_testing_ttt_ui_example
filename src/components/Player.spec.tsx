import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";

import { Player } from "./Player";

afterEach(cleanup);

describe("Player (UI)", () => {
  it("should render the label", () => {
    render(<Player label="X" name="Bob" onChange={() => {}} />);
    expect(screen.getByText("X")).toBeInTheDocument();
  });

  it("should render the name in upper case", () => {
    render(<Player label="X" name="Bob" onChange={() => {}} />);
    const input = screen.getByTestId<HTMLInputElement>("player");
    expect(input.value).toEqual("BOB");
  });

  it("should display a lower case name as upper case", () => {
    render(<Player label="X" name="charlie" onChange={() => {}} />);
    const input = screen.getByTestId<HTMLInputElement>("player");
    expect(input.value).toEqual("CHARLIE");
  });

  it("should call onChange handler when typing", () => {
    const handler = vi.fn();
    render(<Player label="X" name="Bob" onChange={handler} />);

    const input = screen.getByTestId("player");
    fireEvent.change(input, { target: { value: "Alice" } });

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
