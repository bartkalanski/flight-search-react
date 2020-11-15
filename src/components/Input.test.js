import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Input from "./Input";

describe("Item", () => {
  it("should fire handleFormValuesChange", () => {
    const props = {
      label: "From",
      name: "from",
      type: "text",
      handleFieldChange: jest.fn(),
      className: "From",
      placeholder: "",
      id: "autocomplete-airport-1",
      registerRef: jest.fn(),
    };
    const wrapper = mount(<Input {...props} />);
    const testInput = wrapper.find(".search-bar__input-input");
    expect(testInput).toHaveLength(1);
    expect(props.handleFieldChange).toHaveBeenCalledTimes(0);

    // simulate the change
    testInput.simulate("change");
    expect(props.handleFieldChange).toHaveBeenCalled();
  });
});
