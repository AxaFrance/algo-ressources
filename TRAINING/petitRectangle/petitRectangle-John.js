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
  rotateMatrixCounterClockwise,
  sortAsc,
  sortDesc
} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
  input.shift();
  const grid = toGrid(input, " ");

  let xs = [];
  let ys = [];
  grid.forEach(line => {
    line.forEach((cell, cellIndex) => cellIndex % 2 ? ys.push(cell) : xs.push(cell));
  });

  const sortedX = xs.sort(sortAsc);
  const sortedY = ys.sort(sortAsc);

  const xMin = sortedX[0];
  const yMin = sortedY[0];
  const xMax = sortedX[sortedX.length - 1];
  const yMax = sortedY[sortedY.length - 1];

  return `${xMin} ${yMin} ${xMin} ${yMax} ${xMax} ${yMin} ${xMax} ${yMax}`
};