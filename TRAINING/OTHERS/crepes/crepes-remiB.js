//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc,
    toGrid, toGridNumber, fillGrid, resultGridWithSpaces,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise, toNumbers
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    const crepes = input.map(Number);
    
    const isSortedAsc = (arr) => [...arr].reverse().every((v,i,a) => (v > (a[i+1] || 0)));

    if(isSortedAsc(crepes))
    {
        return 0;
    }
    

    let solution = 7;
    let multipleSets = [];
    
    function recursion(crepes, profondeur)
    {
        if(profondeur >= solution )
        {
            return;
        }
    
        let taille = crepes.length;
    
        for(let i = 2; i < taille + 1; i++)
        {
            const crepesCpy = [...crepes];
            const decoupe = crepesCpy.splice(i);
            crepesCpy.reverse();
            const retourne = [...crepesCpy, ...decoupe];
            if(isSortedAsc(retourne))
            {
                solution = Math.min(solution, profondeur);
                return;
            }else{
                recursion(retourne, profondeur + 1);
            }
        }
    }
    
    



    recursion(crepes, 1);
    return solution;
}

