import * as R from "ramda";
import React from "react";
import { shallow, mount } from "enzyme";

import { Cell } from "./Cell";

describe("Cell", () => {
  it("should render with a button with owner", () => {
    const wrapper = mount(<Cell owner="X" position={{ x: 1, y: 0 }} />);
    // console.log(wrapper.debug());
    expect(wrapper.find("button").text()).toEqual("X");
  });

  it("should render with a button the given position", () => {
    const wrapper = mount(<Cell position={{ x: 1, y: 0 }} />);

    expect(wrapper.find("button").prop("data-position")).toEqual({ x: 1, y: 0 });
  });

  it("should call onClick handler", () => {
    const handler = jest.fn();
    // show error with shallow
    const wrapper = mount(<Cell onClick={handler} position={{ x: 1, y: 0 }} />);
    wrapper.find("button").simulate("click");
    expect(handler).toBeCalledWith({ x: 1, y: 0 });
  });
});
