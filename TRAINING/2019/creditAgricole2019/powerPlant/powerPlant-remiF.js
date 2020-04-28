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
    const [x, y] = input.shift().split(" ").map(Number);
    const grid = toGrid(input);
    const s = new ObjectSet();

    for (let i = 0; i < y; i++){
        const val = grid[x - 1][i];
        grid[x - 1][i] = val === "." ? 0 : val;
    }

    const elements = grid[x-1]
        .map((v, indexY) => Number.isInteger(v) ? [x-1,indexY,v] : null)
        .filter(e => e)
        .sort(([,,v], [,,vv]) => v - vv);
    elements.forEach(([xi,xy]) => s.add([xi,xy]));

    while (elements.length) {
        const [xi, yi, value] = elements.shift();
        const voisins = [
            [xi-1, yi, (grid[xi-1]|| [])[yi]],
            [xi, yi-1, grid[xi][yi - 1]],
            [xi, yi+1, grid[xi][yi + 1]]
        ].filter(([,,v])=> v === ".");

        if (voisins.length) {
            for (let i = 0; i < voisins.length; i++) {
                const [xi, yi] = voisins[i];
                if (xi === 0) {
                    return value + 1;
                }
                if (!s.has([xi, yi])) {
                    s.add([xi, yi])
                    elements.push([xi, yi, value + 1]);
                }
            }
        }
    }
    return -1;
};
