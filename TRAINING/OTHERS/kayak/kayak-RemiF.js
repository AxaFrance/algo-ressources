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
    const grid = toGrid(input);
    grid.forEach((x, i) => x.forEach((val, j) => {
        const max = Math.max(i > 0 ? grid[i-1][j] : 0, j > 0 ? grid[i][j-1] : 0);
        grid[i][j] = val === "." ?  max: max + 1;
    }));
    return grid[size - 1][size - 1];
};