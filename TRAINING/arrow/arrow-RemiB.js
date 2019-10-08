//to use with js tools
import _ from "lodash";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    const N = input.shift();
    const direction = input.shift();
    let tableau = Array(11).fill().map(() => Array(11).fill().map(() => "."));
    let flecheN = tableau.map( (ligne, y) => {
        return ligne.map((casier, x) => {
            return ( y+1 <= N && (x >= 5-y && x <= 5+y) )?"*":".";
        }); 
    });

    LocalPrintArray(flecheN);

    let tablAns = [];
    switch(direction)
    {
        case "N":
        tablAns = flecheN;
        break;
        case "E":
        tablAns = rotateMatrix(flecheN);
        break;
        case "S":
        tablAns = rotateMatrix(rotateMatrix(flecheN));
        break;
        case "O":
        tablAns = rotateMatrixCounterClockwise(flecheN);
        break;
    }
    return tablAns.map(v=>v.join("")).join(" ");
};


const flipMatrix = matrix => (
    matrix[0].map((column, index) => (
      matrix.map(row => row[index])
    ))
  );
  
  const rotateMatrix = matrix => (
    flipMatrix(matrix.reverse())
  );
  
  const rotateMatrixCounterClockwise = matrix => (
    flipMatrix(matrix).reverse()
  );