import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
  it("should render Logo component", () => {
    const logo = wrapper.find("Logo");
    expect(logo).toHaveLength(1);
  });
  it("should render app menu", () => {
    const menu = wrapper.find(".app__menu");
    expect(menu).toHaveLength(1);
  });
  it("should render background image", () => {
    const container = wrapper.find(".app-background__container");
    expect(container).toHaveLength(1);
    const image = wrapper.find(".app-background__img");
    expect(image).toHaveLength(1);
  });
  it("should render SearchBar component", () => {
    const SearchBar = wrapper.find("SearchBar");
    expect(SearchBar).toHaveLength(1);
  });
  it("should render FlightResults component", () => {
    const FlightResults = wrapper.find("FlightResults");
    expect(FlightResults).toHaveLength(1);
  });
  it("should submit form", () => {
    const wrap = mount(<App />);
    //console.log(wrap.debug());
  });
});
