input.shift();
let formated = [];
input.forEach((line) => {
  const [E, S] = line.split(" ");
  formated.push({ type: "E", val: E });
  formated.push({ type: "S", val: S });
});
formated.sort((a, b) => a.val / 1 - b.val / 1);

let count = 0;
let max = 0;
formated.forEach(({ type }) => {
  count += type === "E" ? 1 : -1;
  max = count > max ? count : max;
});
return max;
