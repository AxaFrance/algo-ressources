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
    const taille = input.shift();
    const grid = toGrid(input);
    grid.forEach((subGrid, index) => {
        subGrid.forEach((element, subGridIndex) => {
            let val = 0;
            if (subGridIndex > 0) {
                val = grid[index][subGridIndex - 1];
            }
            if (index > 0) {
                val = grid[index - 1][subGridIndex];
            }
            if (index > 0 && subGridIndex > 0) {
                let v1, v2;
                v1 = grid[index - 1][subGridIndex];
                v2 = grid[index][subGridIndex - 1];
                let max = (v1 > v2) ? v1 : v2;
                val = max;
            }
            grid[index][subGridIndex] = val + ((element == "X") ? 1 : 0);
        });
    })
    return grid[taille - 1][taille - 1];
};