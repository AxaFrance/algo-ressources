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
    const argent = +input.shift();
    const N = +input.shift();
    
    let max = 0;
    for (let i = 3; i<= N+2; i++) {
        const [a,b] = input.shift().split(' ').map(Number);
        if (a <= argent && (b-a)> max) max = b-a;
    }
    console.log(max);
}