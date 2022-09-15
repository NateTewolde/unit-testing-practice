import reverseString from "../src/reverseString.js";

test("Reverses one word", () => {
  expect(reverseString("cat")).toBe("tac");
});

test("Reverses sentence", () => {
  expect(reverseString("My cat is smart")).toBe("trams si tac yM");
});

test("Reversing one letter and it stays the same", () => {
  expect(reverseString("b")).toBe("b");
});
