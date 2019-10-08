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
    const tabX = [];
    const tabY = [];
    input.forEach((inp) => {
        const [x,y, xx,yy] = inp.split(" ");
        tabX.push(x, xx);
        tabY.push(y, yy);
    })

    tabX.sort((a, b) => a/1 - b/1);
    tabY.sort((a, b) => a/1 - b/1);
    const minX = tabX.shift();
    const maxX = tabX.pop();
    const minY = tabY.shift();
    const maxY = tabY.pop();
    return [minX, minY, minX, maxY, maxX, minY, maxX, maxY].join(" ");
};