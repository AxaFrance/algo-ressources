//To use with js tools
input.shift();
const calc = (trib, used) => {
    const [nb, ...temp] = trib.split(" ").map(Number);
    const subTribus = temp.filter((e) => !used.has(e));
    subTribus.forEach((e) => used.add(e));

    return nb + ((subTribus && subTribus.length) ? subTribus.reduce((acc, sub) => acc + calc(input[sub], used), 0) : 0);
}
console.log(Math.max(...input.map((trib) => calc(trib, new Set()))));