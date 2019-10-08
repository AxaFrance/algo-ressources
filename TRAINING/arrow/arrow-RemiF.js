//to use with js tools
import _ from "lodash";
import {flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default ([sizeStr, direction]) => {
    const size = sizeStr/1;
    const fillGrid = Array(11).fill().map(() => Array(11).fill().map(() => "."));

    let count = 1;
    _.range(size).forEach((index) => {
        for (let i = 0; i < count; i++) {
            fillGrid[index][Math.floor(11 - count) / 2 + i] = "*";
        }
        count += 2;
    });

    let result;
    switch(direction) {
        case "N": result = fillGrid; break;
        case "S": result = rotateMatrix(rotateMatrix(fillGrid)); break;
        case "E": result = rotateMatrix(fillGrid); break;
        case "O": result = rotateMatrixCounterClockwise(fillGrid); break;
    }
    return result.map((v) => v.join("")).join(" ");
};