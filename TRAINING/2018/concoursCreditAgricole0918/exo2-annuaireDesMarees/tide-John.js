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
  //implements your code here using input array
  const inputMapped = input.slice(1).map(date => ({
    "coef": date.split(" ")[0] / 1,
    "haut": date.split(" ")[1] / 1
  }));
  const inputSorted = inputMapped.sort((a, b) => a.coef - b.coef);
  var isOk = "OK";
  for (i = 0; i < inputSorted.length - 1; i++) {
    if (inputSorted[i].haut > inputSorted[i + 1].haut) {
      isOk = "KO";
      break;
    }
  }
  console.log(isOk);
}