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
  const [from_lat, from_lng, to_lat, to_lng] = input.shift().split(' ').map(Number);
  const nbOfPers = input.shift();
  const filtered = input.filter(pers => {
    const [lat, lng] = pers.split(" ").map(Number);
    return (lat > from_lat && lat < to_lat && lng > from_lng && lng < to_lng) ? true : false;
  });
  return filtered.length;
};