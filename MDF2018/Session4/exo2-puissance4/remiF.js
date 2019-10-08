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
    const grid = toGrid(input);
    const calc = (g) => {
        return g.reduce((a, l) => {
            const ll = l.join("");
            const rRegex = /[R]{4,}/;
            const jRegex = /[J]{4,}/;
            const rMatchs = rRegex.exec(ll) || [];
            const jMatchs = jRegex.exec(ll) || [];
            return {
                R: a.R+rMatchs.reduce((a,v) => a+v.length - 3, 0),
                J: a.J+jMatchs.reduce((a,v) => a+v.length - 3, 0)
            }
        }, {R:0, J:0});
    }
    const a = calc(grid);
    const b = calc(rotateMatrix(grid));
    const rr = a.R+b.R;
    const jj = a.J+b.J
    return rr > jj ? "R": rr===jj ? "NOBODY": "J";
};