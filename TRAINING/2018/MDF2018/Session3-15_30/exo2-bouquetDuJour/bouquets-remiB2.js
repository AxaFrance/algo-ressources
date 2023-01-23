//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

const logs = (...args) => console.error(args);

import {sumArrs, substractTwoArrs} from "./tools.js.js.js";

//console.error( $variable );
//return to send result
export default (input) => {
    let [v, r, j, o] = input.shift().split(" ").map(Number);
    let reserve = [0, 0, 0, 0];
    let bouquets = 0;
    input.forEach(l =>
        {
            let [V, R, J, O] = l.split(" ").map(Number);
            let max = Math.min(
                Math.floor((reserve[0]+V)/v),
                Math.floor((reserve[1]+R)/r),
                Math.floor((reserve[2]+J)/j),
                Math.floor((reserve[3]+O)/o));
            bouquets += max;
            let retrait = substractTwoArrs(reserve, [v*max, r*max, j*max, o*max]).map(v=>v>0?0:v);
            reserve = sumArrs([V, R, J, O], retrait);
        }
    );
    return bouquets;
};