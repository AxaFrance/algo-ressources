//to use with js tools
import _ from "lodash";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    input.shift();
    return (14*60) - input.reduce((acc, value) => {
        return acc + (value.startsWith("S")?parseInt(value.replace("S ", ""), 10):0);
    }, 0)
};