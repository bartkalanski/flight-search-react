import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<SearchBar />)).not.toBeNull();
  });
  it("should have a button", () => {
    const wrapper = shallow(<SearchBar />);
    const button = wrapper.find(".search-bar__btn");
    expect(button).toHaveLength(1);
  });
  it("should submit a form", () => {
    const props = {
      className: "search-bar",
      onSubmit: jest.fn(),
    };
    const wrapper = shallow(<SearchBar {...props} />);
    console.log(wrapper.debug());
    const form = wrapper.find(".search-bar__form");
    expect(props.onSubmit).toHaveBeenCalledTimes(0);
    form.simulate("submit", {
      preventDefault: () => {},
    });
    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });
});
