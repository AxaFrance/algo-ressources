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
    console.log(input.shift() && input.map(Number).reduce((a, v) => a+v))
	//implements your code here using input array
}