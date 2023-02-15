//to use with js tools
import _ from "lodash";
// import PF from "pathfinding";
import {
    toGrid, fillGrid,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => LocalPrint(args);

//LocalPrint( $variable );
//LocalPrintArray( $array );
//return to send result
export default (input) => {
    const size = input.shift();
    const grid = toGrid(input);
    let pastilles = new Set();
    const matrix = grid.map((line, lineIndex) => line.map((col, colIndex) => {
        switch(col) {
            case "C": return 1;
            case "M": return -1;
            case ".": return 0;
            case "O": pastilles.add(`${lineIndex}_${colIndex}`);
            default: return col;
        }
    }));

    let count = 0;
    let toFill = [];
    const setPastille = (i, j) => matrix[i][j] !== "#" && pastilles.add(`${i}_${j}`);
    const fillNext = (i,j) => {
        //top
        if (i=== 0) {
            setPastille(size - 1, j)
        } else {
            setPastille(i-1, j);
        }

        //bottom
        if (i=== (size - 1)) {
            setPastille(0, j);
        } else {
            setPastille(i+1, j);
        }

        //left
        if (j=== 0) {
            setPastille(i, size - 1);
        } else {
            setPastille(i, j-1);
        }

        //right
        if (j=== (size - 1)) {
            setPastille(i, 0);
        } else {
            setPastille(i, j+1);
        }
    }

    const fillMatrix = () => {
        let res = false;
        try {
            pastilles.forEach((key) => {
                const [i,j] = key.split("_").map(Number);
                const val = matrix[i][j];
                if (val !== "O") {
                    if (val === 1) {
                        res = 1;
                    } else if (val === -1) {
                        res = -1;
                        throw "";
                    } else {
                        res === false && (res = true)
                    }
                }
            });
        } catch (e) {

        }

        return res;
    }
    while(count < 200) {
        count++;
        toFill = [];
        [...pastilles.values()].forEach((key) => {
            const [i,j] = key.split("_").map(Number);
            fillNext(i,j);
        });
        let res = fillMatrix();
        if (res === false || res === -1) {
            return 0;
        }
        if (res === 1) {
            return count;
        }
    }
};