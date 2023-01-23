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
	var nbPlaces = input.shift()/1;
	var nbTeams = input.shift()/1;
	var teams = input.map((e) => e/1).sort((a, b) => b-a).filter((e) => e <= nbPlaces);
	var count = 0;

	teams.forEach(function(team, index, object) {
	    if (team === nbPlaces) {
	        count++;
	    } else {
	        const indexof = object.indexOf(nbPlaces - team, index + 1);
	        if (indexof != -1) {
	            count++;
        	    object.splice(indexof, 1);
	        }
	    }
    });
    console.log(count);
}