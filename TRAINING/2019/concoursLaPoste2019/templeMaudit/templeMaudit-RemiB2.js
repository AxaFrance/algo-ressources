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
    let nombreDalles = Number(input.shift());
    let ordre = input.shift().split` `.map(Number);
    
    let ordonne = [...ordre].sort((a,b) => a-b);
    
    let commandes = [];
    
    for(let i = ordre.length - 1; i > 0; i--)
    {
        if(ordre[i] == ordonne[i])
        {
        } else {
            let indexVoulu = ordre.indexOf(ordonne[i]) + 1;
            commandes.push(indexVoulu);
            ordre = [...ordre.slice(0,indexVoulu).reverse(), ...ordre.slice(indexVoulu)];
            
            commandes.push(i+1);
            ordre = [...ordre.slice(0,i+1).reverse()];
        }
    }
    
    console.log(commandes.join(" "));
}