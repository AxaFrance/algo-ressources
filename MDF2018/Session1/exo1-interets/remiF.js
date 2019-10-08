/*******
 * Read input from STDIN
 * Use console.log()  to output your result.
 * Use:
 *      LocalPrint( $variable );
 * to display simple variables in a dedicated area.
 *
 * Use:
 *      LocalPrintArray( $array );
 * to display arrays in a dedicated area.
 * ***/

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are red
readline_object.on("close", contestResponse);


function contestResponse(){
    input.shift();
    var solde = input.shift()/1;
    const amount = input.map(Number);
    const m1 = () => {
        var s = solde;
        var days = 0;
        var interets = 0;
        amount.forEach((a) => {
            s += a;
            if (s < 0) {
                days++;
                if (days >= 3) {
                    interets -= s*10/100;
                }
            } else {
                days = 0
            }
        })
        return interets;
    }


    const m2 = () => {
        var s = solde;
        var days = 0;
        var interets = 0;
        amount.forEach((a) => {
            s += a;
            if (s < 0) {
                days++;
                if (days >= 4) {
                    interets -= s*30/100;
                } else {
                    interets -= s*20/100;
                }
            } else {
                days = 0
            }
        })
        return interets;
    }

    console.log(m2() - m1());
}