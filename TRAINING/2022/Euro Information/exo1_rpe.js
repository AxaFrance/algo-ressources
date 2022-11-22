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
    
    const obj = input.shift().split('').reduce((acc, cur) => {
        acc[cur] = 1;
        return acc;
    }, {});
    
    console.log(Object.keys(obj).length)

}