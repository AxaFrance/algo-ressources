//to use with js tools
import _ from "lodash";
import munkres from "munkres-js";
import Combinatorics from "js-combinatorics";

import {
  ObjectMap,
  ObjectSet,
  sortAsc,
  sortDesc,
  toGrid,
  toGridNumber,
  fillGrid,
  resultGridWithSpaces,
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
  const nbOfComponents = input.shift();
  const repartition = input.shift().split(" ").map(Number);
  const portions = input.slice(0, repartition.reduce((a, b) => a + b));
  const proposals = input.slice(portions.length + 1);

  let start = 0
  const regexp = repartition.reduce((acc, index) => {
    const subPortions = portions.slice(start, start + index);
    start += index;
    acc += `(${subPortions.join('|')}) `;
    return acc;
  }, "");
  return proposals.filter(proposal => proposal.match(new RegExp(`^${regexp.trim()}$`))).length
};