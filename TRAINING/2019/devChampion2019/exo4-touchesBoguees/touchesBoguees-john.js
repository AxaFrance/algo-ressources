input.shift();
const entree = input.shift().split(" ");
const sortie = input.shift().split(" ");
const transform = entree.reduce((acc, curr, id) => {
  acc[curr] = sortie[id];
  acc[curr.toUpperCase()] = sortie[id].toUpperCase();
  return acc;
}, {});
console.log(
  input
    .shift()
    .split("")
    .map(char => (transform[char] ? transform[char] : char))
    .join("")
);
