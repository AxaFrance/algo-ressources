//to use with js tools
import _ from "lodash";
import {flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
	input.shift();
	const t = input.map((inp) => inp.split(" "));
	const tt = t.filter(([,age, poids]) => age/1 >= 2 && age/1 <= 5 && poids/1 >= 1250 && poids/1 <= 1500);

    tt.sort(([,,,c,d], [,,,cc,dd]) => ((cc/1 + dd/1) - (c/1 + d/1)));
	const max = tt[0][3]/1 + tt[0][4]/1;
	const result = tt.filter(([,,,c,d]) => (c/1 + d/1) === max).map(([name]) => name);
	return result.join(" ");
};