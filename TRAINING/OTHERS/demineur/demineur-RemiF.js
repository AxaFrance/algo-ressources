//to use with js tools
import _ from "lodash";
const logs = (...args) => LocalPrintArray(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//console.log to send result
export default (input) => {
    const lines = input.shift()/1;
    const cols = input.shift()/1;
    let pos;
    const grid = input.map((line, i) => line.split("").map((col, j) => {
        if (col === "x") {
            pos = [i, j];
            return ".";
        }
        return col;
    }));
    const hasNested = (i, j) => {
        for (let a = -1; a <= 1; a++) {
            for (let b = -1; b <= 1; b++) {
                try {
                    if (grid[i+a][j+b] === "*") return true;
                } catch(e) {}
            }
        }
        return false;
    };
    if (hasNested(pos[0], pos[1])) {
        return 1;
    } else {
        let set = new Set();
        let alreadyCalc = new Set();
        const addToSet = (i,j) => void set.add(`${i}_${j}`);
        const hasInSet = (i,j) => {
            const has = alreadyCalc.has(`${i}_${j}`);
            !has && alreadyCalc.add(`${i}_${j}`);
            return has;
        };
        const calcNb = (i, j) => {
            if (hasInSet(i, j)) return;
            for (let a = -1; a <= 1; a++) {
                for (let b = -1; b <= 1; b++) {
                    const x = i + a;
                    const y = j + b;
                    try {
                        if (x < 0 || y < 0 || x > (lines -1) || y > (cols - 1)) continue;
                        if (!hasNested(x, y)) {
                            calcNb(x, y);
                        }
                        addToSet(x,y);
                    } catch(e) {}
                }
            }
        };
        calcNb(pos[0], pos[1]);
        return set.size;
    }
};