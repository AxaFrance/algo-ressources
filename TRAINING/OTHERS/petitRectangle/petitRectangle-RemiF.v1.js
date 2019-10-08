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
    input.shift();
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    input.forEach((inp) => {
        const [x,y, xx,yy] = inp.split(" ");
        minX = Math.min(minX, x, xx);
        maxX = Math.max(maxX, x, xx);
        minY = Math.min(minY, y, yy);
        maxY = Math.max(maxY, y, yy);
    })

    return [minX, minY, minX, maxY, maxX, minY, maxX, maxY].join(" ");
};