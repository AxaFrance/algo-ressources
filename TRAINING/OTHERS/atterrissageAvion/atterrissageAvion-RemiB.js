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
    let att = input.shift();
    let maxA = input.shift();
    let pistes = {};
    let collision = false;
    input.forEach(v => {
        let [h,p] = v.split` `;
	    let [heures,minutes] = h.split(":");
	    let temps = (minutes/1) + (heures*60);
	    if(!pistes[p])
	    {
	        pistes[p] = [];
	    }
	    if(pistes[p][0] && temps - pistes[p][0] < 7)
	    {
            collision = true;
	    }
	    pistes[p].push(temps);
	    pistes[p] = pistes[p].filter(u=>temps-u<=45).sort((a,b)=>b-a);
	    if(pistes[p].length > maxA)
	    {
	        collision = true;
	    }
    });
    return collision?"COLLISION":"OK";
};