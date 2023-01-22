function ContestResponse(){
    //implement your code here using input array
    
    // On essaye de calculer le maximum absorbé
    
    let [n,a,c] = input.shift().split` `.map(Number);
    let asteroides = input.shift().split` `.map(Number);
    
    let listeCopy = new Array(n+a+c+1).fill(0).map(v => 0);
    
    let absorb = asteroides.slice(0, a).reduce((a,v)=>a+v,0);
    
    for(let i = 0; i < n; i++)
    {
        listeCopy[i+1] = Math.max(listeCopy[i+1], listeCopy[i]);
        listeCopy[i+a+c] = listeCopy[i] + absorb; // Dans A + C secondes, c'est ce qu'on a absorbé au mieux jusqu'ici plus ce qu'on peut absorber sur A s.
        absorb += (i+a < asteroides.length) ? asteroides[i+a] : 0; // on décale la fenêtre d'absorption
        absorb -= asteroides[i];
    }
    console.log(
        // total de tous les astéroides - le max que l'on peut absorber au mieux
        eval(asteroides.join`+`) - maxInArr(listeCopy)
    );
}