"use strict";

var _calculator = _interopRequireDefault(require("../calculator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const sum = require("../calculator");
// import { calculator } from "./calculator";
// const { test, expect } = require("@jest/globals");
// const { describe } = require("yargs");
describe("testing calculator", function () {
  test("sum", function () {
    var result = (0, _calculator["default"])(9, 3);
    expect(result).toBe(12);
  }); // test("notFunctional", () => {
  //   let result = sum(2, 3);
  //   expect(result).not.toBe(5);
  // });
});