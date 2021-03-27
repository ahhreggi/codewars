// The Observed PIN

const getPINs = (observed) => {

  const adj = {
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["0", "5", "7", "8", "9"],
    9: ["6", "8", "9"],
    0: ["0", "8"]
  };

  // Retrieve all adjacent values for each observed digit
  const alts = [];
  for (const char of observed) {
    alts.push(adj[char]);
  }

  // Create a list of codes using the first digit's alternative values only
  let codes = alts[0];

  let combs = [];
  // For each of the remaining digits
  for (const digit of alts.slice(1)) {
    // For each of the digit's alternative values
    for (const alt of digit) {
      // Append the value to each of the current code combinations
      for (const code of codes) {
        // Add the result to a temporary list
        const updatedCode = code + alt;
        combs.push(updatedCode);
      }
    }
    // Replace the main list of codes with the temporary list
    codes = combs;
    combs = [];
  }

  return codes.sort();

};

console.log(getPINs("13"));
console.log(getPINs("130"));