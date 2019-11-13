input.shift();
input = input.map(Number);
const toReturn = input.reduce((acc, curr) => {
  if (curr > 0) acc += Math.ceil(curr / 10);
  return acc;
}, 0);
console.log(toReturn);
