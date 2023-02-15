//to use with js tools
import _ from "lodash";
import munkres from "munkres-js";
import Combinatorics from "js-combinatorics";

import {
    toGrid, toGridNumber, fillGrid,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    const size = input.shift();
    const grid = toGridNumber(input);
    const perms = Combinatorics.permutation(_.range(size-1).map((v) => v+1));
    let max = -Infinity;
    perms.toArray().forEach((o) => {
        let current = grid[0][o[0]];
        o.forEach((v, i) => {
            current += grid[v][v] + (i > 0 ? grid[o[i-1]][v] : 0)/1;
        });
        current += grid[o[o.length - 1]][0];
        max = Math.max(max, current);
    });
    return max;
};