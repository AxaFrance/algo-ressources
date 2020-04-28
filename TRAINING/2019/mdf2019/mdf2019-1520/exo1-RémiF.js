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
    const reservoir = input.shift()/1;
    const conso = input.shift()/1;
    const a = input.shift()/1;
    const b = input.shift()/1;
    const c = input.shift()/1;
    const dest = input.shift()/1;
    
    const aa = a/100.0*conso;
    const bb = (b-a)/100.0*conso;
    const cc = (c-b)/100.0*conso;
    const dd = (dest-c)/100.0*conso;
    const cond = reservoir >= aa && reservoir >= bb && reservoir >= cc && reservoir >= dd;
    console.log(cond ? "OK": "KO")
}