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


function ContestResponse() {
  LocalPrintArray(input);
  const nbOfTribs = input.shift();
  LocalPrint(nbOfTribs);
  input.forEach(trib => {
    LocalPrint(trib);
    var nbOfWarrior = trib.shift();


  })
  //implements your code here using input array
}