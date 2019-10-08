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
    const parties = input.shift().split(" ").map(Number);
    const me = parties.reduce((acc, val) => acc + val, 0);
    const composantes = input.slice(0, me);
    let compo = []; let nb = 0;
    for (const part of parties) {
        compo.push(composantes.slice(nb, nb + part));
        nb += part;
    }
    let regEx = "^";
    for (var u = 0; u < compo.length; u++) {
        let append = "(";
        append += compo[u].join("|");
        append += ")";
        append += (u == compo.length - 1) ? "" : " ";
        regEx += append;
    }
    regEx += "$";
    const magie = new RegExp(regEx);
    const finir = input.slice(me + 1, input.length);
    return finir.reduce((acc, value) => acc + magie.test(value), 0);
};