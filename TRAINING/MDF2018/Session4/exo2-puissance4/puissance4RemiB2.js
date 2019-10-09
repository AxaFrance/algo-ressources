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
    let pjR = 0;
    let pjY = 0;
    input.forEach(f => {
        pjR += (f.match(/R{4,}/) || [[]])[0].length-3;
        pjY += (f.match(/J{4,}/) || [[]])[0].length-3;
    });
    rotateMatrix(toGrid(input)).forEach(l => {
        pjR += (l.join("").match(/R{4,}/) || [[]])[0].length-3;
        pjY += (l.join("").match(/J{4,}/) || [[]])[0].length-3;
    });
    if(pjR == pjY)
    {
        return "NOBODY";
    }
    if(pjR > pjY){
    return "R";
    }
    if(pjR < pjY)
    {
    return "J";
    }
    
};