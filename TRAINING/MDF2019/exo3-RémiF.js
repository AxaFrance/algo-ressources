//to use with js tools
import _ from "lodash";
import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc,
    toGrid, toGridNumber, fillGrid, fillGridXY, resultGridWithSpaces,findStart,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    input.shift();
    const friends = {};
    const persons = input.shift().split(" ").map(Number);
    const sci = persons.map((e, i) => [e,i+1]).filter(([e]) => e === 1).map(([,i]) => i);
    const lit = persons.map((e, i) => [e,i+1]).filter(([e]) => e === 0).map(([,i]) => i);
    input.map(e => e.split(" ")).forEach(([a,b]) => {
        friends[a] = (friends[a] || new Set()).add(b);
        friends[b] = (friends[b] || new Set()).add(a);
    });
    const matrix = fillGridXY(sci.length, lit.length);
    const commonFriends = (a,b) => a.filter(v => b.includes(v)).length;
    matrix.forEach((e, i) => e.forEach((ee, j) => {
        const common = commonFriends([...(friends[sci[i]] || [])], [...(friends[lit[j]] || [])]);
        matrix[i][j] = common === 0 ? 999999 : 1.0/common;
    }));

    const partialRes = munkres(matrix);
    return partialRes.map(([s,l]) =>`${sci[s]} ${lit[l]}`).join(",");
};
