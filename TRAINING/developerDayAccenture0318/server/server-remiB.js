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
	const demande = input.shift()/1;
	input.shift();
	let serveursTries = input.map(v=>v.split(" ").map(Number)).sort((a,b)=>b[1]-a[1]);
	let generations = 0;
	let total = 0;
	let done = false;
	serveursTries.forEach(v => {
	    total += v[0];
	    generations++;
	    if(total > demande)
	    {
	        console.log(generations);done=true;return
	    }
	})
	if(!done){console.log("KO")}
}