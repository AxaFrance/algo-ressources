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
    const modify = input.shift();
    const nb = input.shift()/1;
    const modified = new Set([modify]);

    for(let i = 0; i < nb*2; i++) {
        const main = input[i++].split(" ")[0];
        const subs = input[i].split(" ");
        if (subs.some((s) => modified.has(s))) {
            modified.add(main);
        }
    }
    modified.delete(modify);
    if (modified.size) {
        return `${modified.size}\n${[...modified.keys()].join("\n")}`;
    }
    return 0;
};