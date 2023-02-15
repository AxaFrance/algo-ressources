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
    let chaine = input.shift();
    var answers = {};
    for (var i = 0; i < chaine.length; i++) {
        const letter = chaine[i];
        if (letter == "-") {
            i += 1;
            continue;
        }
        var countCounter = (chaine.slice(0, i).match(/-./g) || []).length;
        var counter = (chaine.slice(0, i).replace(/-./g, "").match(/./g) || []).length;
        if (!answers[letter]) {
            answers[letter] = 0;
        }
        answers[letter] += 1 / (1 + (counter - countCounter));
    }
    var tab = Object.entries(answers);
    var mm = tab.sort((a, b) => b[1] - a[1]);
    var max = mm[0][1];
    var pl = mm.filter(a => a[1] == max);
    return pl.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)).shift()[0];
};