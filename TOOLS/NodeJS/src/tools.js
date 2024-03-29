export const flipMatrix = matrix => (
    matrix[0].map((column, index) => (
        matrix.map(row => row[index])
    ))
);

export const rotateMatrix = matrix => flipMatrix([...matrix].reverse());

export const rotateMatrixCounterClockwise = matrix => flipMatrix(matrix).reverse();

export const flipMatrixCounterClockwise = matrix => rotateMatrix(matrix).reverse();

export const toGrid = (input, separator = "") => input.map((line) => line.split(separator).map((col) => col));
export const toGridNumber = (input, separator = "") => input.map((line) => line.split(separator).map((col) => col / 1));

export const fillGrid = (size, val) => Array(size).fill().map(() => Array(size).fill(val));
export const fillGridXY = (xSize, ySize, val) => Array(xSize).fill().map(() => Array(ySize).fill(val));

export const findStart = (grid, val) => {
    let pos = [];
    grid.some((line, lineIndex) =>
        line.some((cell, colIndex) => {
            if (cell == val) {
                pos = [lineIndex, colIndex];
                return true;
            }
        })
    );
    return pos;
}

export const sortAsc = (a, b) => a - b;
export const sortDesc = (a, b) => b - a;

export const resultGridWithSpaces = (grid) => grid.map((l) => l.join("")).join(" ");

export class ObjectMap extends Map {
    set(object, value) {
        return super.set(JSON.stringify(object), value);
    }

    get(object) {
        return super.get(JSON.stringify(object));
    }

    delete(object) {
        return super.delete(JSON.stringify(object));
    }

    entries() {
        return [...super.entries()].map(([k,v]) => [JSON.parse(k), v]);
    }
}

export class ObjectSet extends Set {
    has(object) {
        return super.has(JSON.stringify(object));
    }

    delete(object) {
        return super.delete(JSON.stringify(object));
    }

    add(object) {
        return super.add(JSON.stringify(object));
    }

    keys() {
        return [...super.keys].map((k) => JSON.parse(k));
    }
}

Array.prototype.groupBy = function(fn) {
    const map = new Map();
    this.forEach((val) => {
        const res = fn(val)
        map.set(res, [...(map.get(res) || []), val]);
    })
    return [...map.entries()].reduce((obj, [key, value]) => (obj[key] = value, obj), {});
}

export const toNumbers = str => str.split(" ").map(Number);
export const operateTwoArrs = (arr1, arr2, operation) => arr1.map((e,i) => operation(e, arr2[i]));

export const sumArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a+b);
export const divideTwoArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a/b);
export const multiplyTwoArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a*b);
export const substractTwoArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a-b);

export const substractTwoArrsMinZero = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => (a-b>=0)?a-b:0);
export const divideTwoArrsFloor = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => Math.floor(a/b));

export const smallestInArr = arr => Math.floor(arr.sort(sortAsc)[0]);
export const biggestInArr = arr => Math.floor(arr.sort(sortDesc)[0]);

export const maxInArr = arr => arr.reduce((a,v) => v>a?v:a, -Infinity); // Math.max(...enormeTableau) plante si le tableau est très grand, pas cette méthode
export const minInArr = arr => arr.reduce((a,v) => v>a?a:v, Infinity);

// http://homepage.math.uiowa.edu/~goodman/22m150.dir/2007/Permutation%20Generation%20Methods.pdf Heap method
export function permutations(permutation) {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;
  
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
    return result;
  }

  function genererCombinaisons(tableau, tailleMin=0, tailleMax=tableau.length) {
    let combinaisons = [];
    for(let i = 0; i < 2**tableau.length; i++)
    {
        let combinaison = [];
        let mask = i;
        let nombresDeUn = i.toString(2).split`1`.length - 1;
        if( nombresDeUn >= tailleMin && nombresDeUn <= tailleMax )
        {
            for(let j = 0; j < tableau.length; j++)
            {
                if(mask & 1)
                {
                    combinaison.push(tableau[j]);
                }
                mask = mask >> 1;
            }
            combinaisons.push(combinaison);
        }
    }
    return combinaisons;
}

function genererCombinaisonsBinaires(taille, tailleMin=0, tailleMax=taille) {
    let combinaisons = [];
    for(let i = 0; i < 2**taille; i++)
    {
        let tailleChaine = i.toString(2).length;
        if( tailleChaine >= tailleMin && tailleChaine <= tailleMax )
        {
            combinaisons.push(i.toString(2));
        }
    }
    return combinaisons;
}

function isValidPos(tableau2D, x, y)
{
    let tailleYMax = tableau2D.length;
    let tailleXMax = tableau2D[0].length;
    if(x >= 0 && x < tailleXMax && y >= 0 && y < tailleYMax)
    {
        return true;
    }
    return false;
}

function getCoordsVoisins(x, y, diagonales=true)
{
    let coords = [];
    coords.push([x+1, y]);
    coords.push([x, y+1]);
    coords.push([x, y-1]);
    coords.push([x-1, y]);
    if(diagonales)
    {
        coords.push([x-1, y-1]);
        coords.push([x+1, y+1]);
        coords.push([x-1, y+1]);
        coords.push([x+1, y-1]);
    }
    return coords;
}


/*
    Usage, il faut un graphe dirigé de cet acabit:
    let graphe = {
        "s": {"1": any, "3": any},
        "1": {"2": any},
        "2": {"3": any,"t": any},
        "3": {"1": any,"4": any},
        "4": {"2": any,"t": any},
        "t": {}
    };
    J'ai laissé value disponible, si y a besoin de faire un filtre dessus
    Ne pas hésiter à modifier pour les besoins de l'exercice

    Retourne un chemin partant du départ vers la destination, ["s", "1", "2", "t"]
    si aucun chemin, alors retourne un tableau vide
*/
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