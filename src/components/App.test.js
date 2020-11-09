import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<App />)).not.toBeNull();
  });
});
