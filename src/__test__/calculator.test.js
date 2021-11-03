import calculator from "../calculator";
// const sum = require("../calculator");

// import { calculator } from "./calculator";
// const { test, expect } = require("@jest/globals");
// const { describe } = require("yargs");

describe("testing calculator", () => {
  test("sum", () => {
    var result = calculator(9, 3);
    expect(result).toBe(12);
  });
  test("notFunctional", () => {
    let result = calculator(2, 3);
    expect(result).not.toBe(4);
  });
});
