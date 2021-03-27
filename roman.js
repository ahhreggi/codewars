// Returns num in Roman Numerals up to 1 million.
const roman = (num) => {

  const numerals = {
    "(M)": 1000000,
    "(CM)": 900000, "(D)": 500000, "(CD)": 400000, "(C)": 100000,
    "(XC)": 90000, "(L)": 50000, "(XL)": 40000, "(X)": 10000,
    "(MX)": 9000, "(V)": 5000, "(MV)": 4000, M: 1000,
    CM: 900, D: 500, CD: 400, C: 100,
    XC: 90, L: 50, XL: 40, X: 10,
    IX: 9, V: 5, IV: 4, I: 1
  };
  let result = "";
  for (const key in numerals) {
    while (num >= numerals[key]) {
      result += key;
      num -= numerals[key];
    }
  }
  return result.split(")(").join("");

};

console.log(roman(123456));
