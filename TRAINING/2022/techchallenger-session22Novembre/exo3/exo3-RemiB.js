// __________________ Premier algo fait le jour-même, tri par coût et double parcours de tableau ____________________________ //

ContestResponse() {
    let nbTrajets = input.shift()/1;
    let ParisLion = [];
    let lionParis = [];
    input.forEach(v => {
        let [heure, sens, cout] = v.split` `;
        let vraieHeure = heure.split`:`.map(Number);
        let ca = vraieHeure[0]*3600+vraieHeure[1]*60+vraieHeure[2];
        if(sens=="Lyon-Paris")
        {
          lionParis.push([ca, cout/1]);
        } else {
          ParisLion.push([ca, cout/1])
        }
    });
    let sortedParisLion = ParisLion.sort((a,b)=>a[1]-b[1]); // sort sur le cout carbone
    let meilleur = 10000000000000;
    for(let i = 0; i < Math.min(sortedParisLion.length, 10); i++) // on itère sur les top 10 départs moins coûteux
    {
      let monParisLion = sortedParisLion[i];
      let monLionParis = lionParis.filter(v => v[0] > monParisLion[0]).sort((a,b)=>a[1]-b[1])[0]; // sort sur le cout carbone on prend le retour le moins couteux
      if(monLionParis && monLionParis.length>0)
      {
        meilleur = Math.min(meilleur, (monParisLion[1]/1)+(monLionParis[1]/1));
      }
    }
    console.log(meilleur);
}

// ____________________ Second algo à tête reposée: un simple parcours __________________________ //

function ContestResponse() {
    //implement your code here using input array
    input.shift();
    let bestDepart = 10**10;
    let bestTotal = 10**10;
    console.error(input.sort())
    input.sort().forEach(e => {
        let [h,d,c] = e.split` `;
        let cout = Number(c);
        if(d != "Lyon-Paris")
        {
            bestDepart = Math.min(cout, bestDepart)
        } else {
            bestTotal = Math.min(bestDepart + cout, bestTotal)
        }
    })
    console.log(bestTotal);
}