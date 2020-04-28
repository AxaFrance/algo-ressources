//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc,
    toGrid, toGridNumber, fillGrid, resultGridWithSpaces,findStart,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    const size = input.shift()/1;
    const t = 3*size -2;
    let grid = fillGrid(t, ".");
    const process = (grid) => {
        const max = 2*size -1;
        for(let i = size -1; i < max; i++) {
            grid[0][i] = "X";
        }
        for(let i = 1; i < size; i++) {
            grid[i][size -1] = "X";
            grid[i][grid[i].length - size] = "X";
        }
    }
    process(grid);
    grid = rotateMatrix(grid);
    process(grid);
    grid = rotateMatrix(grid);
    process(grid);
    grid = rotateMatrix(grid);
    process(grid);

    return resultGridWithSpaces(grid);
};
