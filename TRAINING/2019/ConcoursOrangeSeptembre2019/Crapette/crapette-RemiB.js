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
    const emptyPiles = input.shift()/1 + 1;
    const startingCardsNumber = input.shift()/1;
    
    if(emptyPiles < 2)
    {
        return "fail";
    }
    if(emptyPiles == 2 && startingCardsNumber == 2)
    {
        return "fail";
    }
    if(emptyPiles < startingCardsNumber)
    {
        return "fail";
    }
    let result = [];
    let cards = input.shift().split(" ");
    let cardsMinus = [...cards];
    let inverted = [...cards].reverse();
    let invertedMinus = [...inverted];
    invertedMinus.pop();
    invertedMinus.forEach((v, i) => {
        result.push(`${v} ${i+1}`);
    });
    cardsMinus.shift();
    if(startingCardsNumber > 3)
    {
        result.push(`${inverted[0]} 2`);
        result.push(`${cards[1]} 1`);
        result.push(`${cards[0]} ${emptyPiles-1}`);
        result.push(`${cards[1]} ${emptyPiles-1}`);
        result.push(`${inverted[0]} 1`);
        cardsMinus.shift();
    } else if (startingCardsNumber == 2){
        result.push(`${cards[0]} ${emptyPiles-1}`);
    } else if (startingCardsNumber == 3) {
        result.push(`${cards[2]} 2`);
        result.push(`${cards[0]} 1`);
        result.push(`${cards[2]} 0`);
        result.push(`${cards[1]} 1`);
        result.push(`${cards[2]} 2`);
        result.push(`${cards[1]} 0`);
        result.push(`${cards[2]} 0`);
        result.push(`${cards[0]} ${emptyPiles-1}`);
        result.push(`${cards[2]} 1`);
    }
    cardsMinus.forEach(v => {
        result.push(`${v} ${emptyPiles-1}`);
    })
    if(startingCardsNumber == 1)
    {
        result.push(`${cards[0]} 1`);
    }
    return result.join(";");
};