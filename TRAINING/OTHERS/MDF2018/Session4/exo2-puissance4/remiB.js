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
    let grid = toGrid(input);
    let red = 0;
    let yellow = 0;
    let currentColor = 0; // 0 red, 1 yellow
    let currentCount = 0;
    for (var i = 0; i < 8; i++) {
        currentCount = 0;
        for (var u = 0; u < 8; u++) {
            if (grid[i][u] == "J") {
                if (!currentColor) {
                    currentColor = 1;
                    if (currentCount > 3) {
                        red += currentCount - 3;
                    }
                    currentCount = 0;
                }
                currentCount++;
            } else {
                if (currentColor) {
                    currentColor = 0;
                    if (currentCount > 3) {
                        yellow += currentCount - 3;
                    }
                    currentCount = 0;
                }
                currentCount++;
            }
            if (u == 7) {
                if (currentCount > 3) {
                    if (currentColor) {
                        yellow += currentCount - 3;
                    } else {
                        red += currentCount - 3;
                    }
                }
            }
        }
    }

    var rotated = rotateMatrix(grid);
    LocalPrintArray(rotated);

    for (var i = 0; i < 8; i++) {
        currentCount = 0;
        for (var u = 0; u < 8; u++) {
            if (rotated[i][u] == "J") {
                if (!currentColor) {
                    currentColor = 1;
                    if (currentCount > 3) {
                        red += currentCount - 3;
                    }
                    currentCount = 0;
                }
                currentCount++;
            } else {
                if (currentColor) {
                    currentColor = 0;
                    if (currentCount > 3) {
                        yellow += currentCount - 3;
                    }
                    currentCount = 0;
                }
                currentCount++;
            }
            if (u == 7) {
                if (currentCount > 3) {
                    if (currentColor) {
                        yellow += currentCount - 3;
                    } else {
                        red += currentCount - 3;
                    }
                }
            }
        }
    }

    let chaineRetour = (red > yellow) ? "R" : "J";
    //console.log(red, yellow);
    return (red == yellow) ? "NOBODY" : chaineRetour;
};