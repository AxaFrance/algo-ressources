const _ = input.shift();
let path = 0;
let acc = 0;
input.forEach(poids => {
    poids = poids / 1;
    if((acc + poids) <= 100){
        acc += poids;
    } else {
        path++;
        acc = poids;
    }
})

console.log(path + 1);