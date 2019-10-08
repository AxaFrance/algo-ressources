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

    let isItOk = 'OK';

    input.shift();
    const maxByTrack = input.shift();
    // Compute tracks log
    let tracks = {};
    input.forEach(flight => {
        let [time, track] = flight.split(' ');
        time = time.split(':')[0]/1 * 60 + time.split(':')[1]/1;
        if(!tracks[track]) tracks[track] = [];
        tracks[track].push(time);
    });

    // Check number max of plane for 45 minutes
    Object.entries(tracks).forEach(track => {
        const [_, times] = track;
        const tracksByMn = new Array(Math.max(...times)).fill(false);
        times.forEach(time => {
            tracksByMn[time] = time;
        });
        tracksByMn.forEach((trackByMn, index) => {
            if(trackByMn != false){
                const sliced = tracksByMn.slice(trackByMn - (index > 45 ? 45 : index), trackByMn);
                const nb = sliced.filter(Boolean);
                if(nb.length >= maxByTrack){
                    isItOk = 'COLLISION';
                }
            }
        })
    })
    
    // CHECK 6 minutes for a track
    Object.entries(tracks).forEach(track => {
        const [_, times] = track;
        for(let i = 0; i < times.length -1; i++){
            if(times[i + 1] - times[i] < 6){
                isItOk = 'COLLISION';
            }
        }
    })

    return isItOk;
    
};