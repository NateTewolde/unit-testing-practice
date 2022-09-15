function caesarCipher(string, key) {
  const caesarShifted = string
    .split("")
    .map((strChar) => shiftChar(strChar, key))
    .join("");

  return caesarShifted;
}

function shiftChar(strChar, key) {
  let shiftedUnicode = 0;
  if (
    strChar.charCodeAt(0) + key > 122 &&
    strChar.charCodeAt(0) >= 97 &&
    strChar.charCodeAt(0) <= 122
  ) {
    let difference = strChar.charCodeAt(0) + key - 122;
    shiftedUnicode += difference + 97;
  } else if (
    strChar.charCodeAt(0) + key < 97 &&
    strChar.charCodeAt(0) >= 97 &&
    strChar.charCodeAt(0) <= 122
  ) {
    let difference = strChar.charCodeAt(0) + key - 96;
    shiftedUnicode += difference + 122;
  } else if (
    strChar.charCodeAt(0) + key > 90 &&
    strChar.charCodeAt(0) >= 65 &&
    strChar.charCodeAt(0) <= 90
  ) {
    let difference = strChar.charCodeAt(0) + key - 90;
    shiftedUnicode += difference + 65;
  } else if (
    strChar.charCodeAt(0) + key < 65 &&
    strChar.charCodeAt(0) >= 65 &&
    strChar.charCodeAt(0) <= 90
  ) {
    let difference = strChar.charCodeAt(0) + key - 64;
    shiftedUnicode += difference + 90;
  } else if (strChar.toLowerCase() != strChar.toUpperCase()) {
    shiftedUnicode += strChar.charCodeAt(0) + key;
  } else {
    shiftedUnicode += strChar.charCodeAt(0);
  }

  return String.fromCharCode(shiftedUnicode);
}

shiftChar("A", -1);

export default caesarCipher;
