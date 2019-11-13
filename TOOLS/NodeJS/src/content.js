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
    const capacity = input.shift() / 1;
    const conso = input.shift() / 1;
    const distances = [];
    let total = 0;
    for(let i = 0; i < input.length; i++){
        if(i == 0){
            distances.push(input[i]);
        } else {
            distances.push(input[i] - input[i - 1]);
        }
    }
    console.log(distances);
    let toReturn = "OK";
    distances.forEach(dis => {
        dis = dis / 1;
        if(capacity / conso * 100 < dis){
            toReturn = "KO";
        }
    })
    return toReturn;
};