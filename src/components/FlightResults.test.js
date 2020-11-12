import React from "react";
import Enzyme, { shallow } from "enzyme";
import FlightResults from "./FlightResults";
import FlightItem from "./FlightItem/FlightItem";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<FlightResults />);
});

describe("FlightResults", () => {
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
  it("should render FlightItem component", () => {
    expect(wrapper.find(FlightItem)).toHaveLength(0);
  });
});
