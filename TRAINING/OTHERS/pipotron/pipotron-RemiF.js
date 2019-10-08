//to use with js tools
import _ from "lodash";
import munkres from "munkres-js";
import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc,
    toGrid, toGridNumber, fillGrid,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    input.shift();
    const sizes = input.shift().split(" ").map(Number);
    const groups = sizes.map((s) => _.range(s).map(() => input.shift()));
    input.shift();
    const regex = new RegExp(`^(${groups.map(g => g.join("|")).join(") (")})$`);
    return input.filter((s) => regex.test(s)).length;
};