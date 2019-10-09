//to use with js tools
import _ from "lodash";
// import munkres from "munkres-js";
// import Combinatorics from "js-combinatorics";

const logs = (...args) => console.error(args);

//console.error( $variable );
//return to send result
export default (input) => {
    input.shift();
    const articles = input.reduce((acc, val) => {
        const [nom, prix] = val.split` `;
        if(!acc[nom])
        {
            acc[nom] = 0;
        }
        acc[nom] += prix/1;
        return acc;
    }, {});
    const sorted = Object.entries(articles).sort((a, b) => b[1] - a[1]);
    const first = sorted[0];
    const filtered = sorted.filter(v=>v[1]==first[1]);
    return filtered.map(v=>v[0]).join(" ");
};