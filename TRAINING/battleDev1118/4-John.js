//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
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
import { isRegExp } from "util";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default input => {
  input.shift();
  const cartesian = Combinatorics.cartesianProduct(...input.map(e => e.split(" "))).toArray();
  let count = 1;
  cartesian.forEach(el => {
    let innerCount = 1;
    let elSorted = el.sort(sortAsc).map(Number);
    for (let i = 1; i < el.length; i++) {
      if (elSorted[i] - elSorted[i - 1] > 60) {
        innerCount++;
      }
    }
    if (innerCount > count) {
      count = innerCount;
    }
  });
  return count;
};
