import React from "react";
import Enzyme, { shallow } from "enzyme";
import FlightItem from "./FlightItem";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("FlightItem", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<FlightItem />)).not.toBeNull();
  });
});
