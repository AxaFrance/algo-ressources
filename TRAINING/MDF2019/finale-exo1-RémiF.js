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
    const [nb,head] = input.shift().split(" ").map(Number);
    let childs = input.reduce((a, e,i) => {
        a[e] = [...(a[e] || []), i];
        return a;
    }, {});
    // let parents = input.reduce((a, e,i) => {
    //     a[i] = [...(a[i] || []), e];
    //     return a;
    // }, {});
    let tree = [];
    const processChilds = (parent, i, level) => {
        tree.push([parent, i, level]);
        (childs[i] || []).forEach(e => {
            processChilds(i, e, level+1);
        })
    }

    processChilds(undefined, head, 0);
    tree.sort(([,,i], [,,ii]) => i - ii);
    tree.reverse();

    const res = [];
    while (tree.length > 1) {
        const [parent, element] = tree.shift();
        res.push(parent === undefined ? element : parent);
        tree = tree.filter(([p, c]) => p !== parent && c !== parent);
    }
    return res.sort(sortAsc).join(" ");
};