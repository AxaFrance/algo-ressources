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
  let size = input.shift();
  const grid = toGrid(input).map(line => line.map(cell => cell === "." ? 0 : 1));
  grid.forEach((line, lineIndex) => {
    line.forEach((cell, cellIndex) => {
      let top = lineIndex > 0 ? grid[lineIndex - 1][cellIndex] : 0;
      let left = cellIndex > 0 ? grid[lineIndex][cellIndex - 1] : 0;
      grid[lineIndex][cellIndex] = Math.max(top, left) + cell;
    });
  })
  return grid[size - 1][size - 1];
};