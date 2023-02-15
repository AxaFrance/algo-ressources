input.shift();
var bl = input.shift()/1;
input.forEach((v) => {
    const vv = v.split(" ").map(Number);
    bl += -vv[0] + vv[1];
}, 0);
console.log(bl > 0 ? "KO": "OK");