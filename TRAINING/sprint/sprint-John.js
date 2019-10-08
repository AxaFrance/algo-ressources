/*******
 * Read input from STDIN
 * Use console.log()  to output your result.
 * Use:
 *      LocalPrint( $variable ); 
 * to display simple variables in a dedicated area.
 * 
 * Use:
 *      LocalPrintArray( $array ); 
 * to display arrays in a dedicated area.
 * ***/

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are red
readline_object.on("close", ContestResponse); 


function ContestResponse(){
	const test = input.slice(1).filter(periode => periode.split(" ").some(val => val === "S"));
	const sum = test.reduce(((acc, curr) => acc += Number.parseInt(curr.split(" ")[1])), 0);
	console.log(14 * 60 - sum);
}