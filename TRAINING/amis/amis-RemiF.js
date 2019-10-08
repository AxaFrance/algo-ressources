//to use with js tools
import _ from "lodash";
import {flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    input.shift();
    const tt = _.flatMap(input, (inp) => inp.split(" "));
    const res = _.groupBy(tt, (tt) => tt);
    return Math.max(...Object.values(res).map((r) => r.length));
};