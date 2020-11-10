import React from "react";
import Enzyme, { shallow } from "enzyme";
import SearchBar from "./SearchBar";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchBar", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<SearchBar />)).not.toBeNull();
  });
  it("should have a button", () => {
    const wrapper = shallow(<SearchBar />);
    const button = wrapper.find(".search-bar__btn");
    expect(button).toBeDefined();
  });
});
