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
	//implement your code here using input array
	let debutArgent = input.shift()/1;
	input.shift();
	let reee = input.map(v => v.split(" ").map(Number));
	let filtered = reee.filter(v => v[0] < debutArgent);
	let ans = filtered.map(v => v[1] - v[0]).sort((a,b) => b-a)[0];
	console.log(ans > 0 ? ans : 0);
}