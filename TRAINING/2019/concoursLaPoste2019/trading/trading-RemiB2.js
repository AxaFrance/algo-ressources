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
    let argent = Number(input.shift());
    input.shift();
    let reponse = (input.map(v => v.split` `.map(Number)).filter(v => v[0] < argent).sort((a,b) => (b[1]-b[0])-(a[1]-a[0])))?.[0];
    console.log(Math.max(reponse[1] - reponse[0],0));
}