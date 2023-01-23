let grapheResiduel = {
    "s": {"1":11, "3":13},
    "1": {"2":12},
    "2": {"3":9,"t":20},
    "3": {"1":10,"4":14},
    "4": {"2":7,"t":4},
    "t": {}
};

let total_flow = 0;
while(true) {
    let chemin = coursCheminParBfs('s', 't', grapheResiduel);
    if(chemin.length == 0)
    {
        console.info("no more path found");
        break;
    } else {
        console.info("Found path: ", chemin);
        let flux_chemin = Infinity;
        for(let i = 0; i < chemin.length - 1; i++)
        {
            let noeud1 = chemin[i];
            let noeud2 = chemin[i+1];
            flux_chemin = Math.min(grapheResiduel[noeud1][noeud2], flux_chemin);
        }
        console.info("Flux minimal :", flux_chemin);
        total_flow += flux_chemin;
        console.info("Nouveau flux max: ", total_flow);
        
        for(let i = 0; i < chemin.length - 1; i++)
        {
            let noeud1 = chemin[i];
            let noeud2 = chemin[i+1];

            /* Decrease capacity forward */
            if(grapheResiduel[noeud1][noeud2] == flux_chemin)
            {
                delete grapheResiduel[noeud1][noeud2];
            } else {
                grapheResiduel[noeud1][noeud2] -= flux_chemin;
            }

            /* Increase capacity backward */
            if(!grapheResiduel[noeud2])
            {
                grapheResiduel[noeud2] = {[noeud1]: 0}
            }
            if(!grapheResiduel[noeud2][noeud1])
            {
                grapheResiduel[noeud2][noeud1] = 0;
            }
            grapheResiduel[noeud2][noeud1] += flux_chemin;
        }
    }
}

function coursCheminParBfs(depart, destination, graphe) {
    let queue = [[depart, [depart]]];
    let visited = [depart];
    let cheminFinal = [];
    while(queue.length)
    {
        let [nomNoeud, cheminActuel] = queue.shift();
        let noeud = graphe[nomNoeud];
        let entries = Object.entries(noeud);
        for(let i = 0; i < entries.length; i++)
        {
            let entry = entries[i];
            let [key, value] = entry;
            if(!visited.includes(key))
            {
                if(key == destination)
                {
                    cheminFinal = [...cheminActuel, key];
                    queue = [];
                    break;
                }
                visited.push(key);
                queue.push([key, [...cheminActuel, key]]);
            }
        }
    }
    return cheminFinal;
}

