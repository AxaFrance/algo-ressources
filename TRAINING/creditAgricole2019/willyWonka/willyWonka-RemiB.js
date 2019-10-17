/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse); 


function ContestResponse(){
	//implement your code here using input array
	input.shift();
	const sachets = input;
	let total = 0;
	for(let i = 0; i < sachets.length; i++)
	{
	    if(sachets[i].length > 2)
        {
            let cumulé = sachets[i].split("").map(Number).reduce((a,v)=>a+v,0);
            if(cumulé == 42)
            {
                total++;
            }
	    } else {
	        if(sachets[i]/1 == 42)
	        {
	            total++;
	        }
	    }
	}
	console.log(total);
}