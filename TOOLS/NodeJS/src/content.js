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
    const gridSize = input.shift();
    let grid = toGrid(input);
    let movement = "";
    let directionHor = ">";
    for(let i = 0; i < gridSize; i ++){
        if(directionHor === ">"){
            for(let j = 1; j < gridSize; j++){
                if(grid[i][j] === "o"){
                    movement += "x";
                }
                movement += directionHor;
            }
        } 
        if(directionHor === "<"){
            for(let j = gridSize - 1; j >= 0; j--){
                if(grid[i][j] === "o"){
                    movement += "x";
                }
                movement += directionHor;
            }
        } 
        directionHor = directionHor === ">" ? "<" : ">";
        if(i < gridSize - 1) movement += "v";
    }
    console.log(grid);
    console.log(movement);
};