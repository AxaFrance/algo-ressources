//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc,
    toGrid, toGridNumber, fillGrid, resultGridWithSpaces,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    const prixBuffet = input.shift();
    input.shift();
    const tables = input.map(e=> {
        const personnes = e/1;
        const prix = (personnes >= 4) 
        ? (personnes >= 6) 
            ? (personnes >= 10) 
                ? 0.7
                : 0.8
            : 0.9
        : 1
        ;
        return personnes * prix * prixBuffet;
    });
    return Math.ceil(tables.reduce((acc, val) => acc + val, 0));
};