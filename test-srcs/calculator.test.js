import Calculator from "../src/calculator.js";

test("Adds 5+6 to get 11", () => {
  expect(Calculator.add(5, 6)).toBe(11);
});

test("Subtract 11-5 to get 6", () => {
  expect(Calculator.subtract(11, 5)).toBe(6);
});

test("Multiplies 4 * 7 to return 28", () => {
  expect(Calculator.multiply(4, 7)).toBe(28);
});

test("Divides 28/4 to return 7", () => {
  expect(Calculator.divide(28, 4)).toBe(7);
});
test("Divides 5/2 to return 2.5", () => {
  expect(Calculator.divide(5, 2)).toBe(2.5);
});

//___________________________

test("adds 0 and 0", () => {
  expect(Calculator.add(0, 0)).toBe(0);
});

test("adds 2 and 2", () => {
  expect(Calculator.add(2, 2)).toBe(4);
});

test("adds positive numbers", () => {
  expect(Calculator.add(2, 6)).toBe(8);
});

test("subtracts numbers", () => {
  expect(Calculator.subtract(10, 4)).toBe(6);
});

test("multiplies two numbers", () => {
  expect(Calculator.multiply(2, 4)).toBe(8);
});
