//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    input.shift();
    let objS = input.map(v=>{
        let [heure, direction] = v.split(" ");
        let vraieHeure = (heure.split(":")[0] * 60) + (heure.split(":")[1]/1);
        return {"heure": vraieHeure, direction}
    });
    let numbers = new Set();
    objS.filter(v => /[SN]/.test(v.direction)).forEach(element => {
        numbers.add(element.heure);
        numbers.add(element.heure + 1);
        numbers.add(element.heure + 2);
    }); 
    return ( objS.filter(v => /[EO]/.test(v.direction)).every(v => {
        return !numbers.has(v.heure) && !numbers.has(v.heure+1) && !numbers.has(v.heure+2)
     }) )? "OK" : "COLLISION";
};