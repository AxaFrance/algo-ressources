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
  const nb = input.shift();
  input.shift();

  return input.reduce((acc, curr) => {
    let [letter, pers] = curr.split(" ");
    if (pers >= nb / 2) acc += letter;
    return acc;
  }, "");

};