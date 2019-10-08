//to use with js tools
import _ from "lodash";
import munkres from "munkres-js";
import Combinatorics from "js-combinatorics";

import {
    toGrid,
    toGridNumber,
    fillGrid,
    flipMatrix,
    flipMatrixCounterClockwise,
    rotateMatrix,
    rotateMatrixCounterClockwise,
    findStart
} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    input.shift();
    const grid = toGrid(input);

    return move(grid, findStart(grid, "<"), "R");

    function changeDirection(grid, [y, x], oldDirection) {
        switch (oldDirection) {
            case 'U':
                if (grid[y][x] == "/") {
                    return move(grid, [y, x], "L");
                } else {
                    return move(grid, [y, x], "R");
                }
                break;
            case 'R':

                if (grid[y][x] == "/") {
                    return move(grid, [y, x], "D");
                } else {
                    return move(grid, [y, x], "U");
                }
                break;
            case 'D':

                if (grid[y][x] == "/") {
                    return move(grid, [y, x], "R");
                } else {
                    return move(grid, [y, x], "L");
                }
                break;
            case 'L':

                if (grid[y][x] == "/") {
                    return move(grid, [y, x], "U");
                } else {
                    return move(grid, [y, x], "D");
                }
                break;
        }
    }

    function move(grid, [y, x], direction) {
        switch (direction) {
            case 'U':
                y++
                break;
            case 'R':
                x++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x--;
                break;
        }
        switch (grid[y][x]) {
            case '.':
                return move(grid, [y, x], direction);
                break;
            case '#':
                return (y / 1 + 1) + " " + (x / 1 + 1);
                break;
            case '<':
                return "0 0";
            default:
                return changeDirection(grid, [y, x], direction);
        }

    }
};