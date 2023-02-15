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
    const str = input.shift();
    const res = new Map();

    const calcWeight = (s, prof) => {
        if (s.length > 0) {
            let count = 0;
            const letter = s[0];
            let index;
            let prev = "";
            try {
                s.split("").forEach((l, i) => {
                    if (l === letter) {
                        prev === "-" ? count-- : count++;
                        if (count === 0) {
                            res.set(letter, [...(res.get(letter) || []), (1 + prof)]);
                            index = i;
                            throw new Error();
                        }
                    }
                    prev = l;
                });
            } catch (e) {
                calcWeight(s.slice(1, index - 1), prof + 1);
                calcWeight(s.slice(index + 1), prof);
            }
        }
    }

    calcWeight(str, 0);
    let w = [...res.entries()].map(([l,v]) => [l, v.reduce((a, v) => a + 1/v, 0)]);
    w.sort(([, v], [, vv]) => vv - v);
    const final = w[0];
    w = w.filter(([, v]) => v === final[1]);
    return w.sort(([l], [ll]) => l.localeCompare(ll))[0][0];
};