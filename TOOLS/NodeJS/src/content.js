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
    const grid = new Array(input[0]/1 + 1).fill([]);
    grid[0] = input[2].split(" ").reverse();
    let result = "";
    do{
        const currentCard = grid[0].shift();
        const notEmptyColumns =  grid.slice(1).filter(({length}) => length > 0); 
        console.log(notEmptyColumns.length);
        if(notEmptyColumns.length === 0){ // Cas toute les piles sont vides
            grid[1].push(currentCard);
            result += `${currentCard} ${0 + 1}`;
        } else {
            console.log(notEmptyColumns)
        }
    }while(grid[0].length > 0);
    return result;
};