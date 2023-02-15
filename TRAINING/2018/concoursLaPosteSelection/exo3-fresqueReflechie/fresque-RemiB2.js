//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import { toGrid, findStart } from "./tools.js";

const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    const taille = input.shift() / 1;
    const grid = toGrid(input);

    const deplacements = new Set();
    const start = findStart(grid, "<");

    let solution = "0 0"
    let deplaceToi = true;
    let deplacement = start.join(";") + ";D";

    while (deplaceToi) {
        if (deplacements.has(deplacement)) {
            deplaceToi = false;
            return solution;
        }
        deplacements.add(deplacement);
        let [posY, posX, direction] = deplacement.split(";");
        posY /= 1;
        posX /= 1;
        let nextDirection = direction;
        let newPosObj = "";
        switch (direction) {
            case "D":
                posX += 1;
                newPosObj = grid[posY][posX];
                if(newPosObj == "/")
                {
                    nextDirection = "H";
                }
                if(newPosObj == "\\")
                {
                    nextDirection = "B";
                }
                break;
            case "H":
                posY -= 1;
                newPosObj = grid[posY][posX];
                if(newPosObj == "/")
                {
                    nextDirection = "D";
                }
                if(newPosObj == "\\")
                {
                    nextDirection = "G";
                }
                break;
            case "B":
                posY += 1;
                newPosObj = grid[posY][posX];
                if(newPosObj == "/")
                {
                    nextDirection = "G";
                }
                if(newPosObj == "\\")
                {
                    nextDirection = "D";
                }
                break;
            case "G":
                posX -= 1;
                newPosObj = grid[posY][posX];
                if(newPosObj == "/")
                {
                    nextDirection = "B";
                }
                if(newPosObj == "\\")
                {
                    nextDirection = "H";
                }
                break;
        }
        if(!newPosObj)
        {
            deplaceToi = false;
            return solution;
        }
        if(newPosObj == "#")
        {
            return (posY+1) + " " + (posX+1);
        }
        deplacement = posY + ";" + posX + ";" + nextDirection;
    }

    return solution;
};
