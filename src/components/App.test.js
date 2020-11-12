import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";


describe("App", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<App />)).not.toBeNull();
  });
});
