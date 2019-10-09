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
    let MJs = input.shift()/1;
    let tempsTotal = 0;
    let plagistes = 0;
    let currTime = 0;
    input.forEach(v => {
       let [time, action] = v.split(" ");
       let tTime = time.split(":")[0]*60 + time.split(":")[1]/1;
       if(plagistes > 10*MJs)
       {
          tempsTotal += tTime - currTime;
       }
       plagistes += ((action == "E") ? 1 : -1 );
       currTime = tTime;
    });
    if(currTime < 1380 && plagistes > 10*MJs)
    {
        tempsTotal += (1380 - currTime);
    }
    return tempsTotal;
};