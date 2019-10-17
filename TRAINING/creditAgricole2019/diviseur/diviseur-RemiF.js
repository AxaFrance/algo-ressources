const min = input.shift()/1;
const max = input.shift()/1;
const nb = input.shift()/1;
for (let i = min; i <= max; i++) {
    if (i/nb === Math.floor(i/nb)) {
        console.log(i);
        break;
    }
}