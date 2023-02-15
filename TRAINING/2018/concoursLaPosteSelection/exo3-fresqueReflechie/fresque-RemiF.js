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
export default (input) => {
    input.shift();
    const grid = toGrid(input);
    let curr;
    let sens = "D";
    grid.some((line, lineIndex) => line.some((col, colIndex) => {
        if (col === "<") {
            curr = [lineIndex, colIndex];
            return true;
        }
    }));
    const calcBackSlash = (x,y) => {
        switch (sens) {
            case "H": {
                sens = "G";
                calcPos(x, y - 1);
                break;
            }
            case "B":{
                sens = "D";
                calcPos(x, y + 1);
                break;
            }
            case "G":{
                sens = "H";
                calcPos(x - 1, y);
                break;
            }
            case "D":{
                sens = "B";
                calcPos(x + 1, y);
                break;
            }
        }
    }
    const calcSlash = (x,y) => {
        switch (sens) {
            case "H": {
                sens = "D";
                calcPos(x, y + 1);
                break;
            }
            case "B":{
                sens = "G";
                calcPos(x, y - 1);
                break;
            }
            case "G":{
                sens = "B";
                calcPos(x + 1, y);
                break;
            }
            case "D":{
                sens = "H";
                calcPos(x - 1, y);
                break;
            }
        }
    }
    const calcPos = (x,y) => {
        switch (grid[x][y]) {
            case "/": calcSlash(x,y); break;
            case "\\": calcBackSlash(x,y); break;
            case "<": throw new Error();
            case "#": throw new Error(`${x+1} ${y+1}`); break;
            default: {
                sens === "H" && calcPos(x - 1, y);
                sens === "B" && calcPos(x + 1, y);
                sens === "D" && calcPos(x, y + 1);
                sens === "G" && calcPos(x, y - 1);
            }
        }
    }

    try {
        calcPos(curr[0], curr[1] + 1);
    } catch(e) {
        return e.message || "0 0";
    }
};
