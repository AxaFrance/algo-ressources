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
    const liste = input.map(e => {
        const u = e.split(" ");
        [nom, age, poids, demarche, courbure] = u;
        return { nom, age, poids, demarche, courbure }
    });
    const listeF = liste.filter(e => {
        if (e.age / 1 > 5 || e.age / 1 < 1 || e.poids / 1 < 1250 || e.poids / 1 > 1500) {
            return false;
        }
        return true;
    });
    const sortedList = listeF.sort((a, b) => {
        return ((b.demarche / 1 + b.courbure / 1) / 2) - ((a.demarche / 1 + a.courbure / 1) / 2);
    });
    const max = ((sortedList[0].demarche / 1 + sortedList[0].courbure / 1) / 2);
    const aze = sortedList.filter(e => ((e.demarche / 1 + e.courbure / 1) / 2) == max).map(e => e.nom);
    return aze.join(" ");
};