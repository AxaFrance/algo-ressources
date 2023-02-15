//to use with js tools
import _ from "lodash";
import munkres from "munkres-js";
import Combinatorics from "js-combinatorics";

import {
    toGrid, toGridNumber, fillGrid,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result

const directions = {
    "D": [1, 0],
    "G": [-1, 0],
    "H": [0, -1],
    "B": [0, 1]
};

const normalMirrorList = {
    "D": "H",
    "G": "B",
    "H": "D",
    "B": "G"
};

const invertedMirrorList = {
    "D": "B",
    "G": "H",
    "H": "G",
    "B": "D"
};

export default (input) => {
    const tailleCarre = input.shift();
    const grid = toGrid(input);
    let finished = false;
    var currentPosition = [];
    grid.some((subG, index) => subG.some((e, subIndex) => (e === "<" && currentPosition.push(subIndex, index))));
    var directionActuelle = "D";
    while (!finished) {
        const y = currentPosition[1] / 1 + directions[directionActuelle][1] / 1;
        const x = currentPosition[0] / 1 + directions[directionActuelle][0] / 1;
        const nextElement = grid[y][x];
        if (nextElement === "<") {
            finished = true;
            return "0 0";
        }
        if (nextElement === "#") {
            finished = true;
            return `${y + 1} ${x + 1}`;
        }
        if (nextElement === "/") {
            directionActuelle = normalMirrorList[directionActuelle];
        }
        if (nextElement === "\\") {
            directionActuelle = invertedMirrorList[directionActuelle];
        }
        currentPosition = [x, y];
    }
};