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
    const perms = Combinatorics.permutation(input);
    try {
        perms.toArray().forEach((perm) => {
            let total = 0;
            const s = perm.join("");
            const possible = perm.some((v, i) => {
                total += v.length;
                if (total === s.length / 2) {
                    return true;
                }
            });
            if (possible) {
                const s = perm.join("");
                const first = s.slice(0, s.length / 2);
                const last = s.slice(s.length / 2);
                const f = first.split("");
                const l = last.split("");
                const match = f.every((ff, i) => {
                    switch (ff) {
                        case "A": return l[i] === "T" ? true : false;
                        case "T": return l[i] === "A" ? true : false;
                        case "G": return l[i] === "C" ? true : false;
                        case "C": return l[i] === "G" ? true : false;
                    }
                });
    
                if (match) {
                    let total = "";
                    let index = 0;
                    const splitIndex = perm.some((v, i) => {
                        total += v;
                        if (total.length == s.length / 2) {
                            index = i +1;
                            return true;
                        }
                    });
                    throw new Error(`${perm.slice(0, index).join(" ")}#${perm.slice(index).join(" ")}`);
                }
            }
        });
    } catch (e) {
        return e.message;
    }
};