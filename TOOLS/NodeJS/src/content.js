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
  fillGridXY,
  resultGridWithSpaces,
  findStart,
  flipMatrix,
  flipMatrixCounterClockwise,
  rotateMatrix,
  rotateMatrixCounterClockwise,
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
  input.shift();
  const replaceWhile = (string, regex, toReplace) => (regex.test(string) ? replaceWhile(string.replace(regex, toReplace), regex, toReplace) : string);
  return input
    .map(
      (S, index) =>
        `Case #${index + 1}: ${replaceWhile(
          S.split("")
            .map((D) => `${"(".repeat(D)}${D}${")".repeat(D)}`)
            .join(""),
          /\)\(/g,
          ""
        )}`
    )
    .join("\n");
};
