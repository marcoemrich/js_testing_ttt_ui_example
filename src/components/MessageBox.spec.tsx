import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";

import { MessageBox } from "./MessageBox";

afterEach(cleanup);

describe("MessageBox (UI)", () => {
  it("should render one list item per message", () => {
    render(<MessageBox messages={["first", "second", "third"]} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("should render the message texts", () => {
    render(<MessageBox messages={["Player X wins!"]} />);
    expect(screen.getByText("Player X wins!")).toBeInTheDocument();
  });

  it("should render an empty list without messages", () => {
    render(<MessageBox />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
