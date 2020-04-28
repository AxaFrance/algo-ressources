let position = input.shift()/1;
input.forEach(action => {
    const [inn, out] = action.split(" ").map(Number);
    position -= out;
    position += inn;
});
if(position <= 100){
    console.log(1000);
} 
if(position > 100 && position <= 10000) {
    console.log(100)
} 
if(position > 10000) {
    console.log("KO");
}