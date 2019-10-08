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
    input.shift();
    const trucs = input.map(e => e.split(" "));
    const minTrucs = trucs.map(([a,b]) => [toMins(a), b]).sort((a,b) => a[0] - b[0]);
    const groupedSorts = _.groupBy(minTrucs, e=>e[1]);
    let coll = false;

    Object.keys(groupedSorts).forEach((direction, index) => {
        groupedSorts[direction].forEach(([temps]) => {
            correspondingC[direction].forEach((directionOrtho) => {
                const elementT = groupedSorts[directionOrtho] && groupedSorts[directionOrtho].find((e) => {
                    return Math.abs(e[0] - temps) <= 2;
                });
                if(elementT)
                {
                    coll = true;
                    return;
                }
            })
        });
    });

    return (coll) ? "COLLISION" : "OK";
};

const correspondingC = {
    "E": ["N", "S"],
    "O": ["N", "S"],
    "N": ["E", "O"],
    "S": ["E", "O"]
};

const toMins = (a) => {
    const [h,m] = a.split(":");
    return h*60+m/1
}