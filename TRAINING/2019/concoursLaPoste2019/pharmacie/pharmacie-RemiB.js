//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import {
    ObjectMap, ObjectSet,
    sortAsc, sortDesc,
    toGrid, toGridNumber, fillGrid, resultGridWithSpaces,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    const tailleCroix = input.shift()/1;
    const tailleGrille = (3*tailleCroix-2);
    const padding1 = ".".repeat((tailleGrille-tailleCroix)/2);
    const ligne1 = padding1 + "X".repeat(tailleCroix) + padding1;
    const ligneIntermediaire = padding1 + "X" + ".".repeat(tailleCroix-2) + "X" + padding1;
    const ligneEntree = "X".repeat(tailleCroix) + ".".repeat(tailleCroix-2) + "X".repeat(tailleCroix);
    const ligneMilieu = "X" + ".".repeat(tailleGrille-2) + "X";

    const saut = " ";

    const ensemble = ligne1 + saut + (ligneIntermediaire+saut).repeat(tailleCroix-2)
    + ligneEntree + saut + (ligneMilieu + saut).repeat(tailleCroix-2) + ligneEntree + saut
    + (ligneIntermediaire + saut).repeat(tailleCroix-2) + ligne1;
    return ensemble;
};