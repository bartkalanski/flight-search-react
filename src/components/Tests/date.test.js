import date from "../Utilities/date";

describe("date", () => {
  it("should reverse a string when required ", () => {
    const ddmmyyyy = "02-10-1991";
    expect(date(ddmmyyyy)).toBe("1991-10-02");
  });
  it("should not reverse a string when not required ", () => {
    const yyyymmdd = "1991-10-02";
    expect(date(yyyymmdd)).toBe("1991-10-02");
  });
});
