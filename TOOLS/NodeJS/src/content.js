//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

import {
  ObjectMap,
  ObjectSet,
  sortAsc,
  sortDesc,
  toGrid,
  toGridNumber,
  fillGrid,
  fillGridXY,
  resultGridWithSpaces,
  findStart,
  flipMatrix,
  flipMatrixCounterClockwise,
  rotateMatrix,
  rotateMatrixCounterClockwise,
  toNumbers,
  operateTwoArrs
} from "./tools";
const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
  let [H, L] = input.shift().split` `.map(Number);
  let tableau = input.map(v => v.replace(/\./g, 0).split``);
  
  for(let y = 0; y < H; y++)
      for(let x = 0; x < L; x++)
      {
          if(tableau[y][x] == "#")
          {
              let voisinHaut = isValidPos(tableau, x, y - 1) ? tableau[y-1][x] : 0;
              let voisinGauche = isValidPos(tableau, x - 1, y) ? tableau[y][x-1] : 0;
              tableau[y][x] = Math.min(voisinHaut, voisinGauche) + 1;
          } else { 
              tableau[y][x] = 0;
          }
      }

  let max = 0;

  for(let y = H - 1; y > -1; y--)
      for(let x = L - 1; x > -1; x--)
      {
          if(tableau[y][x] != 0)
          {
              let voisinDroite = isValidPos(tableau, x + 1, y) ? tableau[y][x+1] : 0;
              let voisinBas = isValidPos(tableau, x, y + 1) ? tableau[y+1][x] : 0;
              let profondeur = Math.min(voisinDroite, voisinBas) + 1;
              if(profondeur <= tableau[y][x])
              {
                tableau[y][x] = profondeur;
                if(profondeur > max)
                {
                    max = profondeur;
                }
              }
          }
      }
      
  return max;
};

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