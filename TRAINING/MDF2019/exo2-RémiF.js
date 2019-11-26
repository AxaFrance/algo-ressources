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
    const [friend, relations] = input.shift().split(" ").map(Number);
    
    const friends = (id) => [
        ...new Set(input
            .filter(e => e.split(" ").includes(`${id}`))
            .flatMap(e => e.split(" ").map(Number))
            .filter(e => e !== id)
        )
    ];
    const mines = friends(1);
    const res = mines.map(e => {
        const tmp = friends(e).filter(e => e === 1);
        let count = 0;
        for(let i = 0; i < tmp.length; i++) {
            const tt = tmp[i];
            for(let j = 0; j < mines.length; j++) {
                if (tt === mines[j]) {
                    count++;
                }
            }
        }
        return [count, e];
    });
    res.sort(([c,d], [cc,dd]) => {
        if ((cc - c) === 0) {
            return dd-d;
        };
        return cc - c;
    });
    return (res[0] || [])[1] || -1;
};