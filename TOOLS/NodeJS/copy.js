const fs = require("fs");
const path = require("path");
const {copy} = require("copy-paste");
const filePath = path.resolve("./dist/bundle.js");
fs.lstat(filePath, (err) => {
    if (!err) {
        fs.readFile(filePath, {encoding: "utf8"}, (err, file) => {
            copy(file, () => console.log("COPY OK!"));
        });
    }
});