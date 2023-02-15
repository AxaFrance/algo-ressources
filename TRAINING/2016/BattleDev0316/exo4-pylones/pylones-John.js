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
  function wichPilonesAreVisible(pilones, start) {
    let visiblePilones = [];
    let max = -Infinity;
    for (var i = start + 1; i <= pilones.length; i++) {
      if (pilones[i] > max) {
        max = pilones[i];
        visiblePilones.push(i);
      }
    }
    max = -Infinity;
    for (var i = start - 1; i >= 0; i--) {
      if (pilones[i] > max) {
        max = pilones[i];
        visiblePilones.push(i);
      }
    }
    return visiblePilones;
  }

  return _.range(input.shift()).map(i => wichPilonesAreVisible(input.map(Number), i).length).join(' ');
};