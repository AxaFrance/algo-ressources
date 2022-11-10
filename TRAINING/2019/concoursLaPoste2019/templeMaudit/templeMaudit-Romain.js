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
    
  const N = +input.shift();
  let dalles = input.shift().split(' ').map(Number);

  const ordres = [];

  while(dalles.length > 0) {
    let max = Math.max(...dalles);
    let pos = dalles.findIndex(d => d == max) + 1;
    ordres.push(pos);
    let sDalles = dalles.slice(0, pos).reverse();
    dalles = [...sDalles, ...dalles.slice(pos)].reverse();
    ordres.push(dalles.length);
    dalles = dalles.slice(0, dalles.length - 1);
  }

    console.log(ordres.join(' '))
}
