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
    const map = new Map();
    input.forEach((e) => {
        const [k, v] = e.split(" ");
        map.set(k, (map.get(k) || 0) + v/1);
    });

    const tt = Array.from(map.entries());
    tt.sort(([,v], [,vv]) => vv - v);
    const max = tt[0][1];
    return tt.filter(([, v]) => v === max).map(([name]) => name).join(" ");
};