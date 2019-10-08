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
    const pics = input.map(Number);
    const superman = pics.map((val, index) => {
        const picsAGauche = (index > 0) ? bbl(_.reverse(pics.slice(0, index))) : 0;
        const picsADroite = (index != pics.length - 1) ? bbl(pics.slice(index + 1)) : 0;
        return picsADroite + picsAGauche;
    });
    return superman.join(" ");
};

function bbl(tableau) {
    var tabCpy = [...tableau];
    var max = 0;
    var count = 0;
    for (var i = 0; i < tabCpy.length; i++) {
        if (tabCpy[i] > max) {
            max = tabCpy[i];
            count++;
        }
    }
    return count;
}