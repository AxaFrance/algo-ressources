input.shift();
input = input.map(Number);
const colors = [2, 3, 5, 7, 11];
let toReturn = [];
input.forEach(color => {
  colors.forEach(col => {
    if (color % col === 0) toReturn.push(col);
  });
});
console.log([...new Set(toReturn)].sort((a, b) => a - b).join(" "));
