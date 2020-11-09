import React from "react";
import Enzyme, { shallow } from "enzyme";
import ErrorMessage from "./ErrorMessage";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("ErrorMessage", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<ErrorMessage />)).not.toBeNull();
  });
  it("shows empty string if results don't provide an error msg", () => {
    const wrapper = shallow(<ErrorMessage />);
    const message = wrapper.find(".error__header");
    expect(message.text()).toBe("");
  });
  it("shows error header", () => {
    const wrapper = shallow(
      <ErrorMessage errorTop="We're sorry we haven't got any flights available on that date" />
    );
    const message = wrapper.find(".error__header");
    expect(message.text()).not.toBe("");
  });
  it("shows empty string if results don't provide an error msg", () => {
    const wrapper = shallow(<ErrorMessage />);
    const message = wrapper.find(".error_msg");
    expect(message.text()).toBe("");
  });
  it("shows error message", () => {
    const wrapper = shallow(
      <ErrorMessage errorBottom="Please pick another date" />
    );
    const message = wrapper.find(".error_msg");
    expect(message.text()).not.toBe("");
  });
});
