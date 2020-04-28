let min = input.shift() / 1;
const max = input.shift() / 1;
const div = input.shift() / 1;
let toReturn = null;
do{
    if(parseInt(min / div) === (min/div)){
        toReturn = min;
        min = max + 1;
    }
    min++;
}while(min <= max)
console.log(toReturn);