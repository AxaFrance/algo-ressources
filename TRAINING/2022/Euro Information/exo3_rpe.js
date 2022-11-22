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
    //implement your code here using input 
    let found = false;
    let test = 12344;
    input.shift();
    const eq = input.shift().split('');
    const res = input.shift();
    const t = "10000*(a+"+eq[0]+")+1000*(b+"+eq[1]+")+100*(c+"+eq[2]+")+10*(d+"+eq[3]+")+e+"+eq[4]+" == "+res;
    while (!found) {
        let [a,b,c,d,e] = (++test).toString().split('').map(i => +i);
        found = eval(t);
        if (found) {
            let o = {
                [a]: 1,
                [b]: 1,
                [c]: 1,
                [d]: 1,
                [e]: 1,
            }
            found = Object.keys(o).length == 5 && !o[0];
        }
      }

  console.log(test.toString());
}