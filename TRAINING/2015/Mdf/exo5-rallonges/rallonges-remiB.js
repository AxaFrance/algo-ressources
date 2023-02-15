// Les rallonges

function ContestResponse(){
    //implement your code here using input array    let nb = input.shift()/1;
    let atteints = {};
    let lTotal = 0;
    let mm = [];
    let ff = [];
    input.forEach(e => {
       let [type, longueur] = e.split` `;
       if(type == "M-M")
       {
           mm.push(longueur/1);
       }
       if(type == "F-F")
       {
           ff.push(longueur/1);
       }
       if(type == "M-F" || type == "F-M")
       {
           lTotal += (longueur/1);
       }
    });
    let sortedMM = mm.sort((a,b) => b-a);
    let sortedFF = ff.sort((a,b) => b-a);
    while(sortedMM.length > 0 && sortedFF.length > 0)
    {
        lTotal += (sortedMM.shift() + sortedFF.shift());
    }
    console.log(lTotal);
}