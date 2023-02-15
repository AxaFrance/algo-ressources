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
    const mesNotes = toNumbers(input.shift());
    input.shift();
    const nbrMCopains = input.shift()/1;
    const notesPotes = input.map(e => toNumbers(e));
    const distancesPotes = notesPotes.map(e => {
        const d = distance(mesNotes, e).reduce((acc,val)=>acc+val, 0);
        const note = e[5];
        return {d, note};
    });
    const sortedDistancePotes = distancesPotes.sort((a,b) => a.d-b.d);
    const mu = sortedDistancePotes.filter((val, index) => index < nbrMCopains);
    return Math.floor(mu.reduce((acc, val) => acc + val.note / mu.length, 0));
};

const distance = (arr1, arr2) => {
    return substractTwoArrsAbs(arr1, arr2)
};

const toNumbers = str => str.split(" ").map(Number);
const operateTwoArrs = (arr1, arr2, operation) => arr1.map((e,i) => operation(e, arr2[i]));
const substractTwoArrsAbs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => Math.abs(b-a));
