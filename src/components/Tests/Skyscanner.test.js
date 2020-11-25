import React from "react";
import Enzyme from "enzyme";
import Skyscanner from "../API/Skyscanner";
import mockAxios from "axios";

describe("when calling the get method", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    mockAxios.mockClear();
  });
  it("calls the API GET method", () => {
    expect(mockAxios.get).toHaveBeenCalledTimes(0);
    Skyscanner.get("/testurl", {}, undefined, undefined);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
