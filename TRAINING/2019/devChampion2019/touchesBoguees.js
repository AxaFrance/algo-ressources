input.shift();
const a = input.shift().split(" ");
const b = input.shift().split(" ");
let m = a.reduce((acc,v, i) => ({...acc, [v]: b[i], [v.toUpperCase()]: b[i].toUpperCase()}), {});

console.log(input.shift().reduce((a,v) => a+(m[v] || v), ""));