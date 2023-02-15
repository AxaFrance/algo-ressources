//to use with js tools
import _ from "lodash";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    input.shift();
    const count = input
        .filter((a) => a.includes("S"))
        .map((inp) => inp.split(" ")[1]/1)
        .reduce((a,v) => a+v, 0);
    return 14*60 - count;
};