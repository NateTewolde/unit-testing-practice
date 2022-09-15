function caesarCipher(string, key) {
  const caesarShifted = string
    .split("")
    .map((strChar) => shiftChar(strChar, key))
    .join("");

  return caesarShifted;
}

function shiftChar(strChar, key) {
  let shiftedUnicode;
  if (strChar.charCodeAt(0) === 32) {
    shiftedUnicode = 32;
  }
  if (strChar.charCodeAt(0) + key > 122) {
  }
  return String.fromCharCode(shiftedUnicode);
}

export default caesarCipher;
