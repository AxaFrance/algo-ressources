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
	input.shift();
	const calc = e => `${e}`.split("").reduce((acc, v) => acc+v/1,0);
	const res = input.filter(e => {
	    if (e === "42") return true;
	    let t = calc(e);
	    while(t > 42) {
	        t = calc(t);
	    }
	    return t === 42;
	});

	console.log(res.length);
}