//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

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
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default input => {
  input.shift();
  const words = input.filter(word => {
    if (word.length >= 5 && word.length <= 7) {
      if (word.charCodeAt(1) - word.charCodeAt(0) == 1) {
        let last = word.split("")[word.length - 1];
        if (last === "a" || last == "e" || last == "i" || last == "o" || last == "u" || last == "y") {
          return true;
        }
      }
    }
  });
  return new Set(words).size;
};
