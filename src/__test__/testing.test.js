import searchCar from "../testing";


describe("testingSearcCar", () => {
  test("car", () => {
    let res = searchCar([1, "as", "@", "$", 2], "as");
    expect(res).toBe(1);
  });
});
