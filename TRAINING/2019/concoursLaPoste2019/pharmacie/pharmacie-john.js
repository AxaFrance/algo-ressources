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
    const generateResult = grid => {
        const toto = grid.reduce((acc, curr) => acc += `${curr.join('')}\n`, "")
        return toto.trim()
    }
    
    const grid = new Array(3*input - 2).fill([]);
    for(let i = 0; i <grid.length; i++){
        grid[i] = new Array(3*input - 2).fill(".")
    }
    for(let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid.length; j++) {
            if(i == 0 || i == grid.length-1){ // haut & bas
                if(j >= input - 1 && j <= input * 2 - 2){
                    grid[i][j] = "X";
                }
            }
            if(j == 0 || j == grid.length -1){ // gauche & droite
                if(i >= input - 1 && i <= input * 2 - 2){
                    grid[i][j] = "X";
                }
            }
            if(i == input - 1 || i == input * 2 - 2){ // grosse ligne horizontal
                if(j <= input - 1 || j >= input * 2 - 2){
                    grid[i][j] = "X";
                }
            }
            if(j == input - 1 || j == input * 2 - 2){ // gross ligne vertical
                if(i <= input - 1 || i >= input * 2 - 2){
                    grid[i][j] = "X";
                }
            }
        }
    }
    return generateResult(grid);
};