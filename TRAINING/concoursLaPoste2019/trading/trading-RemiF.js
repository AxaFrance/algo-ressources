/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse);


function ContestResponse(){
	const amount = input.shift()/1;
	input.shift();
	let max = 0;
	input.map(e => e.split(" ").map(Number)).filter(([a]) => a <= amount).forEach(([a,b]) => {
	    max = Math.max(max, b-a)
	});
	console.log(max);
}