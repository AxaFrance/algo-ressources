//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    const tailleGrille = input.shift() / 1;
    const portes = new Array();
    for (let i = 0; i < tailleGrille; i++) {
        for (let j = 0; j < tailleGrille; j++) {
            if (input[i][j] == "X") {
                portes.push({
                    "X": j,
                    "Y": i
                });
            }
        }
    }

    const grapheDeTransitions = Array(portes.length).fill().map(() => Array());
    for(let porteIndex in portes)
    {
        for(let porteAssocieIndex in portes)
        {
            if(p2AtteignableParP1(portes[porteIndex/1], portes[porteAssocieIndex/1]))
            {
                grapheDeTransitions[porteIndex/1].push(porteAssocieIndex/1);
            }
        }
    }
    const r = maxBipartiteMatching(grapheDeTransitions);
    return r;
    return r.reduce((acc,value) => acc + (value == -1), 0);
};

function p2AtteignableParP1(p1, p2)
{
    if(p2.Y == p1.Y && p2.X == p1.X)
    {
        return false;
    }
    return p2.Y >= p1.Y && p2.X >= p1.X;
}

function maxBipartiteMatching(grapheTransitionnel, indexNoeudsVisités = [])
{
    let correspondances = new Array(grapheTransitionnel.length).fill(-1);
    for(let indexNoeud in grapheTransitionnel) // Pour chaque noeud de notre graphe de transition
    {
        cheminAugmentant(indexNoeud/1, grapheTransitionnel, indexNoeudsVisités, correspondances);
    }
    return correspondances;
}

function cheminAugmentant(indexNoeud, grapheTransitionnel, indexNoeudsVisités, correspondances)
{
    for(let indexNoeudLié of grapheTransitionnel[indexNoeud])
    {
        if(!indexNoeudsVisités.includes(indexNoeudLié))
        {
            indexNoeudsVisités.push(indexNoeudLié);
            if(correspondances[indexNoeudLié] == -1 || cheminAugmentant(correspondances[indexNoeudLié], grapheTransitionnel, indexNoeudsVisités, correspondances))
            {
                correspondances[indexNoeudLié] = indexNoeud;
                return true;
            }
        }
    }
    return false;
}