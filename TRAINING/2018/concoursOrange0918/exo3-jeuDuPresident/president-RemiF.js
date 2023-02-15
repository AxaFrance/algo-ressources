//to use with js tools
import _ from "lodash";
// import PF from "pathfinding";
// import bipartite from "bipartite-matching";
// import munkres from "munkres-js";
import {
    toGrid, fillGrid,
    flipMatrix, flipMatrixCounterClockwise, rotateMatrix, rotateMatrixCounterClockwise
} from "./tools";
const logs = (...args) => LocalPrint(args);

export default (input) => {
    input.shift();
    input.shift();
    let first = input.shift();
    const arr = input.map((inp) => inp.split(" ").map(Number)).map((a) => _.groupBy(a, (e) => e));
    let tmp = arr.map((a) => Object.values(a).map((e) => Math.ceil(e.length / 4)).reduce((acc, v) => acc+v, 0));
    tmp = tmp.map((e, i) => ({"value": e, "index": i}))

    const res = [];
    tmp = [...tmp.slice(first - 1, tmp.length), ...tmp.slice(0, first - 1)];
    let ii = 0;
    while (tmp.some((e) => e.value > -1)) {
        const el = tmp[ii++ % tmp.length];
        el.value--;
        if (el.value === 0) {
            res.push(el.index + 1);
        }
    }
    return res.join(" ");
};