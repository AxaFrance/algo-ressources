//to use with js tools
import _ from "lodash";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    input.shift();

    let mapOne = input.map((val) => {
        const vals = val.split(" ");
        return {"coeff": vals[0], "hauteur": vals[1]};
    });

    const sorted = mapOne.sort((a, b) => {
        return a.coeff - b.coeff;
    })

    LocalPrintArray(sorted);

    for(var i = 1; i < sorted.length; i++)
    {
        if(sorted[i-1].hauteur > sorted[i].hauteur)
        return "KO";
    }

    return "OK";
};