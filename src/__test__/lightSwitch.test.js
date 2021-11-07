import switchPositino from "../lightSwitch";

const cases = [
  [0, "A"],
  [1, "A"],
  [2, "A"],
  [3, "A"],
  [4, "A"],
  [5, "A"],
  [6, "A"],
  [7, "A"],
  [8, "S"],
  [9, "S"],
  [10, "S"],
  [11, "S"],
  [12, "S"],
  [13, "S"],
  [14, "S"],
  [15, "S"],
  [16, "S"],
  [17, "S"],
  [18, "A"],
  [19, "A"],
  [20, "A"],
  [21, "A"],
  [22, "A"],
  [23, "A"],
];
cases.forEach((caseElem) => {
  Date.now = jest.fn(() =>
    new Date(Date.UTC(2021, 11, 4, caseElem[0], 55)).valueOf()
  );
  caseElem.push(new Date(Date.now()));
});

// let testDate = new Date(Date.now());
describe("testAllHours", () => {
  test.each(cases)("testLightSwitch %p", (hours, res, data) => {
    expect(switchPositino(data)).toBe(res);
  });
});
