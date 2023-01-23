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
export default input => {
  input.shift();
  let match;
  input.forEach(v => {
    ["nantes", "paris", "lyon", "mareille"].some(e => {
      if (v.toLowerCase().includes(e)) {
        match = e;
      }
    });
  });
  console.log(match ? match.charAt(0).toUpperCase() + match.slice(1) : "Pas de magasin");
};
