// Strip Comments
// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

// Strips all text that follows any of a set of comment markers passed in
const stripComments = (input, markers) => {

  const lines = input.split("\n");

  for (const mark of markers) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes(mark)) {
        const endIndex = line.indexOf(mark);
        lines[i] = line.substring(0, endIndex).trim();
      }
    }
  }

  return lines.join("\n");

};

console.log(stripComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));