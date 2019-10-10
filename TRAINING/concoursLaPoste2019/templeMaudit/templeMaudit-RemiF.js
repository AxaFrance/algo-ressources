//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc,
    toGrid, toGridNumber, fillGrid, resultGridWithSpaces,findStart,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    input.shift();
    const data = input.shift().split(" ").map(Number);
    let bridge = data.map(e=>e);
    const result = data.map(e=>e);

    data.sort(sortDesc);
    result.sort(sortAsc);
    const moves = [];

    const rev = (i) => {
        const t = [...bridge];
        const start = t.splice(0,i+1);
        moves.push(i+1);
        return [...start.reverse(), ...t];
    };
    let tt = bridge.length - 1;
    while(data.length) {
        if (bridge.join(",") === result.join(",")) {
            return moves.join(" ");
        }
        const curr = data.shift();
        bridge = rev(bridge.indexOf(curr));
        bridge = rev(tt--);
    }
    return moves.join(" ");
};
