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
    const colorsPerBouquet = toNumbers(input.shift());
    const arrivages = input.map(toNumbers);
    let restes = [[0, 0, 0, 0], [0, 0, 0, 0]];
    let totalBouquets = 0;
    arrivages.forEach(arrivage => {
        restes.push(arrivage);
        restes.shift();
        const total = sumArrs(restes[0], restes[1]);

        const maxBouquets = smallestInArr(divideTwoArrsFloor(total, colorsPerBouquet));
        const retraitFleurs = colorsPerBouquet.map(fleurs => fleurs * maxBouquets);

        const dRetrait = substractTwoArrs(restes[0], retraitFleurs).map(e => (e>0)?0:e);
        restes[1] = sumArrs(restes[1], dRetrait);

        totalBouquets += maxBouquets;
    });

    return totalBouquets;
};

const toNumbers = str => str.split(" ").map(Number);
const operateTwoArrs = (arr1, arr2, operation) => arr1.map((e,i) => operation(e, arr2[i]));

const sumArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a+b);
const divideTwoArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a/b);
const multiplyTwoArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a*b);
const substractTwoArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a-b);


const substractTwoArrsZero = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => (a-b>=0)?a-b:0);
const divideTwoArrsFloor = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => Math.floor(a/b));

const smallestInArr = arr => Math.floor(arr.sort((a,b) => a-b)[0]);
const biggestInArr = arr => Math.floor(arr.sort((a,b) => b-a)[0]);