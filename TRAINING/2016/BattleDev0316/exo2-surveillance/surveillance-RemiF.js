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
    const [from_lat, from_lng, to_lat, to_lng] = input.shift().split(" ").map(Number);
    input.shift();
    const p = input.map(e => e.split(" ").map(Number));
    return p.filter(([lat, lng]) => lat < to_lat && lat > from_lat && lng > from_lng && lng < to_lng).length;
};