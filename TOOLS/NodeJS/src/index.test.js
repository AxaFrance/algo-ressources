import content from "./content";
import _ from "lodash";
import fs from "fs";
import path from "path";


//1,2,3,4,5,6 => exclude input/output 1,2,3,4,5,6
const exclude = [ 2, 3 ]

const files = fs.readdirSync(path.resolve(path.join(__dirname, "examples"))).filter((filename) => !filename.startsWith("."));
const fileGroup = _.groupBy(files, (file) => {
    const number = path.parse(file).name.replace(/input|output/, "") / 1;
    return exclude.includes(number) ? "excludes" : number;
});
delete fileGroup.excludes;
const jsonContents = Object.values(fileGroup).map(([input, output]) => {
    const fileInput = path.resolve(`${__dirname}/examples/${input}`);
    const fileOutput = path.resolve(`${__dirname}/examples/${output}`);
    const inputsJson = fs.readFileSync(fileInput, "utf-8").split("\n").filter(Boolean);
    const outputsJson = fs.readFileSync(fileOutput, "utf-8").split("\n").filter(Boolean);
    return [inputsJson, outputsJson];
});

describe("tests", () => {
    window.console.error = (log) => console.info(log);
    window.console.errorArray = (...logs) => logs.forEach((log) => console.info(log));

    jsonContents.forEach(([input, outputs]) => {
        test("process test", () => {
            const result = content(_.cloneDeep(input));

            if (outputs.length === 1) {
                expect(result).toEqual(isNaN(outputs[0]) ? outputs[0] : outputs[0] / 1);
            } else {
                try {
                    expect(result).toEqual(outputs.join(" "));
                } catch (e) {
                    expect(result).toEqual(outputs.join("\n"));
                }
            }
        })
    });
});