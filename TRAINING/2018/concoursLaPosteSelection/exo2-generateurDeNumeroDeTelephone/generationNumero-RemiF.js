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
    if (input == 1) {
        let perm = Combinatorics.permutation([1,2,3,4,5,7,8,9], 2);

        let startPerm = Combinatorics.permutation([0,0,0,6,6,6]).toArray();
        const res = new Set();
        try {
            
            while (res.size < 1000) {
                startPerm.forEach((s) => {
                    perm.toArray().forEach((r) => {
                        res.add(`06${s.join("")}${r.join("")}`);
                        if (res.size >= 1000) throw "end";
                    })
                });
            }
        } catch (e) {

        }
        return Array.from(res).splice(0, 1000).join(" ");
    } else {
        let perm = Combinatorics.permutation([1,2,3,4,5,7,8,9]);
        const res = perm.toArray().splice(0, 1000);
        return res.map((r) => `06${r.join("")}`).join(" ");
    }
};