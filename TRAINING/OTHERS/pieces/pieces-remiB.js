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
    let answer = "";
    for(let i = 0; i < gridSize; i++)
    {
        for(let j = 0; j < gridSize; j++)
        {
            if(i%2 == 0 && grid[i][j] == "o")
            {
                answer += "x";
            }
            if(i%2 == 1 && grid[i][gridSize - j - 1] == "o")
            {
                answer += "x";
            }
            if(j < gridSize-1)
            {
                answer += (i%2) ? "<" : ">";
            }
        }
        if(i < gridSize-1)
        {
            answer += "v";
        }
    }

    for(let i = gridSize - 1; i >= 0; i--)
    {
        for(let j = 0; j < gridSize; j++)
        {
            if(i%2 == 1 && grid[i][j] == "*")
            {
                answer += "x";
            }
            if(i%2 == 0 && grid[i][gridSize - j - 1] == "*")
            {
                answer += "x";
            }
            if(j < gridSize-1)
            {
                answer += (i%2) ? ">" : "<";
            }
        }
        if(i > 0)
        {
            answer += "^";
        }
    }
    
    return answer;
};