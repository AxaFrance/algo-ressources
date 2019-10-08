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
    input.shift();
    const solde = input.shift()/1;
    input = input.map(Number);
    return Math.ceil(newCalc(input, solde) - oldCalc(input, solde));
};


const oldCalc = (input, s) => {
    let nbDay = 0;
    let amount = 0;
    input.forEach((e) => {
        s += e;
        if (s < 0) {
            nbDay++;
        } else {
            nbDay = 0;
        }

        if (nbDay > 2) {
            amount -= s*0.1;
        }
    })
    return amount;
}


const newCalc = (input, s) => {
    let nbDay = 0;
    let amount = 0;
    input.forEach((e) => {
        s += e;
        if (s < 0) {
            nbDay++;
            amount -= (nbDay >= 4) ? s*0.3 : s*0.2;
        } else {
            nbDay = 0;
        }
    })
    return amount;
}