import caesarCipher from "../src/caesarCipher.js";

test("Shifts one letter forwards", () => {
  expect(caesarCipher("f", 1)).toBe("g");
});

test("Shifts one letter backwords", () => {
  expect(caesarCipher("a", -1)).toBe("z");
});

test("Shifts one word forwards", () => {
  expect(caesarCipher("cat", 3)).toBe("fdw");
});

test("Shifts one word backwords", () => {
  expect(caesarCipher("cat", -5)).toBe("xvo");
});

test("Shifts one phrase forwards", () => {
  expect(caesarCipher("the big dog", 3)).toBe("wkh elj grj");
});

test("Shifts one phrase backwords", () => {
  expect(caesarCipher("wkh elj grj", -3)).toBe("the big dog");
});

test("Shifts retain case", () => {
  expect(caesarCipher("Wkh elj Grj", -3)).toBe("The big Dog");
});

test("Shifts keep punctuation", () => {
  expect(caesarCipher("The: big dog!", 3)).toBe("Wkh: elj grj!");
});
