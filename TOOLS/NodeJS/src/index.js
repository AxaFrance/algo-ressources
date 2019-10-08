import contestResponse from "./content.js";
const _readLine = require("readline").createInterface(process.stdin, process.stdout);

const input = [];
_readLine.on("line", (value) => void input.push(value));
_readLine.on("close", () => {
    console.error("------------ INPUT -----------");
    console.error(input);
    console.error("---------- RESPONSE ----------");
    const response = contestResponse(input);
    if (response !== undefined) {
        console.log(response);
    }
    console.error(" ");
    console.error(" ");
});
