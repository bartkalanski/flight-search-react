import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
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
  it("should render React Fragment if no results available", () => {
    const fragment = <React.Fragment />;
    expect(wrapper.containsMatchingElement(fragment)).toBe(true);
  });
  it("should not render FlightItem if no results available", () => {
    const item = <FlightItem />;
    expect(wrapper.containsMatchingElement(item)).toBe(false);
  });
  it("should render error message if no flights available", () => {
    const wrap = mount(<FlightResults results={{ Quotes: [] }} />);
    const errorMessage = wrap.find(".error__container");
    expect(errorMessage.length).toBe(1);
  });

  it("should render FlightItem if results available", () => {
    const wrapper = shallow(
      <FlightResults
        results={{
          Carriers: [
            {
              Name: "KLM",
            },
          ],
          Places: [
            {
              Name: "Amsterdam",
              IataCode: "AMS",
            },
            {
              IataCode: "MAN",
            },
          ],
          Quotes: [
            {
              MinPrice: "80",

              Direct: "Not Direct",

              OutboundLeg: {
                DepartureDate: "20/11/2020",
              },
              InboundLeg: {
                DepartureDate: "26/11/2020",
              },
            },
          ],
        }}
      />
    );
    const item = <FlightItem />;
    expect(wrapper.containsMatchingElement(item)).toBe(true);
  });
});
