import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import FlightItem from "./FlightItem";

describe("FlightItem", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<FlightItem />);
    expect(wrapper).not.toBeNull();
  });
  it("should display a React Fragment if no results available", () => {
    const wrapper = shallow(<FlightItem />);

    const fragment = <React.Fragment />;
    expect(wrapper.containsMatchingElement(fragment)).toBe(true);
  });
  it("should display results data to the user", () => {
    const wrapper = shallow(
      <FlightItem
        results={{
          Carriers: [
            {
              Name: "KLM",
            },
          ],
          Quotes: [
            {
              MinPrice: "80",
            },
            {
              Direct: "Not Direct",
            },
          ],
        }}
        date="20/11/2020"
        arrival="AMS"
        departure="MAN"
        outbound="inbound"
      />
    );
    const arrivalAirport = wrapper.find(".results__flight-arrival-airport");
    expect(arrivalAirport.length).toBe(1);
    const departureAirport = wrapper.find(".results__flight-departure-airport");
    expect(departureAirport.length).toBe(1);
    const price = wrapper.find(".results__price");
    expect(price.length).toBe(1);
    const date = wrapper.find(".results__header div");
    expect(date.length).toBe(1);
    const direct = wrapper.find(".results__flight-direct");
    expect(direct.length).toBe(1);
  });
});
