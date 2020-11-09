import React from "react";
import Enzyme, { shallow } from "enzyme";
import SearchBar from "./SearchBar";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchBar", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<SearchBar />)).not.toBeNull();
  });
});
