import capitalize from "../src/capitalize.js";

test("Capitalizes the letter a", () => {
  expect(capitalize("a")).toBe("A");
});

test("Capitalizes the first letter in cat", () => {
  expect(capitalize("cat")).toBe("Cat");
});

test("Capitalizes the first letter in the sentence 'marcus ate a sandwitch'", () => {
  expect(capitalize("marcus ate a sandwitch")).toBe("Marcus ate a sandwitch");
});
