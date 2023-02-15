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
  LocalPrintArray(input);
  const size = input.shift();
  const nbOfMoves = input.shift();
  if (nbOfMoves == 0) {
    console.log(0 + " " + 0);
  } else if (nbOfMoves > 0) {
    var memo = {
      "x": parseInt(size),
      "y": 0
    }
    const headPositions = input.map((direction) => {
      switch (direction) {
        case 'D':
          memo.x = memo.x + 1;
          break;

        case 'G':
          memo.x = memo.x - 1;
          break;

        case 'H':
          memo.y = memo.y - 1;
          break;

        case 'B':
          memo.y = memo.y + 1;
          break;
      }
      return {
        x: memo.x,
        y: memo.y
      }
    });
    const queuePosition = headPositions[headPositions.length - size];
    LocalPrintArray(headPositions);
    LocalPrintArray(queuePosition);
    console.log(queuePosition.x - 1 + " " + queuePosition.y);
  }

  //LocalPrintArray(queuePosition.x);
}