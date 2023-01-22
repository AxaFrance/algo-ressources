input.shift();
const colors = [2,3,5,7,11];
const res = new Set();
input.forEach(e => {

	colors.filter(c => (e/1)%c === 0).forEach(e => res.add(e));
});
console.log([...res].sort((a,b) => a-b).join(" "));