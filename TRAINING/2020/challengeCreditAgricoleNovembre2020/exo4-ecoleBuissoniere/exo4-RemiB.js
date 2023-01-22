function ContestResponse(){
    //implement your code here using input array
    let plages = Number(input.shift());
    let coursConsecutifsMax = Number(input.shift());
    let cours = input.map(Number);
    let couts = [...cours];
    
    for(let i = coursConsecutifsMax + 1; i < cours.length; i++)
    {
        let coutsLocaux = couts.slice(i-coursConsecutifsMax-1, i);
        let minCoutLocal = Math.min(...coutsLocaux);
        couts[i] = minCoutLocal + cours[i];
    }
    
    let finDeLaSuite = couts.slice(couts.length - coursConsecutifsMax - 1);
    let min = Math.min(...finDeLaSuite);
    let sommeCours = cours.reduce((a,v) => a+v,0);
    console.log(sommeCours - min);
}