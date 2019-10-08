//to use with js tools
import _ from "lodash";
import munkres from "munkres-js";
import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc,
    toGrid, toGridNumber, fillGrid, resultGridWithSpaces,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    const size = input.shift()/1;
    const p = input.map(Number);
    const r = _.range(size).map((s) => {
        let maxA = -Infinity;
        let maxB = -Infinity;
        let count = 0;
        for(let i = s - 1; i >= 0; i--) {
            if (p[i] > maxA) {
                maxA = p[i];
                count++;
            }
        }
        for(let i = s + 1; i < size; i++) {
            if (p[i] > maxB) {
                maxB = p[i];
                count++;
            }
            
        }
        return count;
    });

    return r.join(" ");
};