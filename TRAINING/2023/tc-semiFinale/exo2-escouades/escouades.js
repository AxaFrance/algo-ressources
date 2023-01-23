function ContestResponse(){
    //implement your code here using input array
    let effectifs = input.shift()/1;
    let equipes = input.shift()/1;
    let mercenaires = input.map(Number);
    
    let sumMercenaires = mercenaires.reduce((a,v) => a+v,0);
    let somme = sumMercenaires + effectifs;
    
    let seuil = Math.round(somme/2);
    console.error("mercenaires.length", mercenaires.length, "seuil", seuil);
    
    // Initialisation d'un tableau à false de 0 à tous les mercenaires
    let reach = new Array(sumMercenaires+1).fill(0).map(v => false);
    // Nos effectifs, on les a déjà
    reach[effectifs] = true;
    
    // Pour chaque groupe de mercenaire
    mercenaires.forEach(mercenaire => 
    {
        for(let i = sumMercenaires; i >= effectifs + mercenaire /* ça ne sert à rien de descendre plus bas */; i--)
        {
            /* Pour chaque case en partant de la fin,
             si il y a déjà une case atteinte située à notre index - le nombre où on est (à true) 
             alors on peut atteindre notre index actuel en prenant ce groupe
             si on a déjà atteint notre index d'une autre manière, bah on le laisse (d'où le OU)
            */
             reach[i] = reach[i] || reach[i-mercenaire];
        }
    });
    // On commence à parcourir notre tableau de bool depuis le seuil de la moitié, pour la supériorité numérique
    while(!reach[seuil]) // On cherche le premier atteint, vu qu'on a pas besoin de savoir la combinaison précise qui nous amène à ce résultat
    seuil++;
    console.log(seuil - effectifs); // on retourne le nombre de mercenaires à embaucher
}