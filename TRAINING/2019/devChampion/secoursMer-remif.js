input.shift();
let count = 0;
input.forEach(e => {
	let b = e/1;
	while (b > 0) {
		count++;
		b-=10;
	}
});
console.log(count);