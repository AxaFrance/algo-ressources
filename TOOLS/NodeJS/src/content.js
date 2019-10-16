//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc,
    toGrid, toGridNumber, fillGrid, resultGridWithSpaces,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    const [width, height] = input.shift().split(' ');
    const grid = toGrid(input);
    let mouv = 0;
    let x = 0, y = -1;
    while(y < height){
        while(x < width){
            if(grid[y + 1][x] != 'X'){ // Test descente
                y += 1;
                mouv ++;
            }
        }
    }
    return mouv - 1;
};