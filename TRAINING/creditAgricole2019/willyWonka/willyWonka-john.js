input.shift();
const checkSum = nb => {
    nb = nb.split('').map(Number);
    return nb.reduce((a,b) => a + b);
}
let acc = 0;
input.forEach(dat => {
    while(dat > 99){
        dat = checkSum(dat);
    }
    if(dat == 42){
        acc += 1;
    }
})
return acc;