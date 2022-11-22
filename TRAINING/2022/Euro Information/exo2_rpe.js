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
    const [C,M] = input.shift().split(' ');
    const chauffages = input.shift().split(' ').map(Number);
    const maisons = input.shift().split(' ').map(Number);
    
    const res = maisons.map(m => chauffages.find(c => c>=m)).reduce((acc, cur) => acc+cur, 0);
    console.log(res)
}