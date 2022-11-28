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