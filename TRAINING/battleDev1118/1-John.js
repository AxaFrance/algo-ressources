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
  const reserve = input.shift() / 1;
  const winners = input.filter(el => el.split(" ")[0] / 1 > reserve);
  const sortedWinners = winners.map(e => e.split(" ")).sort(([aprice], [bprice]) => bprice / 1 - aprice / 1);
  return winners.length ? sortedWinners[0][1].toUpperCase() : "KO";
};
