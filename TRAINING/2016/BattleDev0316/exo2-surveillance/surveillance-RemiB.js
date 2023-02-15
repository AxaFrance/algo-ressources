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
    const [dlat, dlng, elat, elng] = input.shift().split(" ").map(Number);
    input.shift();
    return input.map(e => e.split(" ")).filter(([lat, lng]) => {
        return (lat / 1 > dlat && lat / 1 < elat && lng / 1 > dlng && lng / 1 < elng)
    }).length
};