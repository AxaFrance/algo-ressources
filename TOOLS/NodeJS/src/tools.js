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
const divideTwoArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a/b);
const multiplyTwoArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a*b);
export const substractTwoArrs = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => a-b);

const substractTwoArrsZero = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => (a-b>=0)?a-b:0);
const divideTwoArrsFloor = (arr1, arr2) => operateTwoArrs(arr1, arr2, (a,b) => Math.floor(a/b));

export const smallestInArr = arr => Math.floor(arr.sort(sortAsc)[0]);
export const biggestInArr = arr => Math.floor(arr.sort(sortDesc)[0]);