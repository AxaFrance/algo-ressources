//to use with js tools
// import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

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
    const toursJoues = input.shift() / 1;
    const jetonsInitiaux = input.shift() / 1;
    const liste = input.map(e => e.split(" "));
    // M Q R 
    // 1à500, 2 lettres, 0 à 36
    // Q : soit 0 à 36, soit P soit I
    // Pair : 2, 4, 6... sauf 0
    let jetons = jetonsInitiaux;
    let resultat = 0;
    liste.forEach(instruction => {
        let [mise, query, result] = instruction;
        result /= 1;
        jetons -= (mise / 1);
        if (query == "P" && result % 2 == 0 && result != 0) {
            jetons += (mise / 1) * 2;
        }
        if (query == "I" && result % 2 == 1) {
            jetons += (mise / 1) * 2;
        }
        if (query != "P" && query != "I" && result == query / 1) {
            jetons += (mise / 1) * 36;
        }
        if (jetons <= 0) {
            resultat++;
            jetons = jetonsInitiaux;
        }
    });
    return resultat;
};