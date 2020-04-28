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
    let triage = input[0].split(" ").map(Number);
    let answer = "";
    while(triage.length > 0)
    {
        let plusGros = [...triage].sort((a,b)=>b-a)[0];
        if(triage[triage.length - 1] != plusGros)
        {
            let index = triage.findIndex(v => v == plusGros)+1;
            answer += index + " " + triage.length + " ";
            let intermediate = triage.slice(0, index).reverse().concat(triage.slice(index));
            triage = intermediate.reverse();
        } else {}
        triage.pop();
    }
    return answer;
};