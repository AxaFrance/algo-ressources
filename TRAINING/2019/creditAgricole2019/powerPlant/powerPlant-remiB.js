//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc, findStart,
    toGrid, toGridNumber, fillGrid, resultGridWithSpaces,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    const [h, l] = input.shift().split(" ").map(Number);
    let grid = toGrid(input);
    let added = new ObjectSet();
    let stack = [];
    for (let i = 0; i < l; i++) {
        if (grid[h - 1][i] == ".") {
            let x = i;
            let y = h - 1;
            grid[h - 1][i] = 0;
            added.add({ x, y });
            stack.push({ x, y });
        }
    }
    let answer = -1;
    while (stack.length > 0) {
        let currentCase = stack.shift();
        let { x, y } = currentCase;
        let value = grid[y][x];
        if (x > 0 && grid[y][x - 1] == ".") {
            let ajout = { "x": x - 1, "y": y };
            if(!added.has(ajout))
            {
                added.add(ajout);
                stack.push(ajout);
            }
            grid[y][x - 1] = value + 1;
        }
        if (x < l - 1 && grid[y][x + 1] == ".") {
            let ajout = { "x": x + 1, "y": y };
            if(!added.has(ajout))
            {
                added.add(ajout);
                stack.push(ajout);
            }
            grid[y][x + 1] = value + 1;
        }
        if (y == 1 && grid[y - 1][x] == ".") {
            return value + 1;
        }
        if (y > 0 && grid[y - 1][x] == ".") {
            let ajout = { "x": x, "y": y - 1 };
            if(!added.has(ajout))
            {
                added.add(ajout);
                stack.push(ajout);
            }
            grid[y - 1][x] = value + 1;
        }
    }
    return answer;
};

