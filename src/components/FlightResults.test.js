import React from "react";
import Enzyme, { shallow } from "enzyme";
import FlightResults from "./FlightResults";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("FlightResults", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<FlightResults />)).not.toBeNull();
  });
});
