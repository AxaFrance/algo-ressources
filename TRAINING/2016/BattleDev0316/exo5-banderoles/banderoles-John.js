//to use with js tools
import _ from "lodash";
import munkres from "munkres-js";
import Combinatorics from "js-combinatorics";

import {
  toGrid,
  toGridNumber,
  fillGrid,
  flipMatrix,
  flipMatrixCounterClockwise,
  rotateMatrix,
  rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
  input.shift()
  return input.map(Number).reduce((acc, curr, indexCurr, poteaux) => {
    for (let i = indexCurr + 1; i < poteaux.length; i++) {
      if (poteaux[i] > curr) {
        break;
      }
      if (curr == poteaux[i]) {
        acc += i - indexCurr;
        break;
      }
    }
    return acc;
  }, 0);
};