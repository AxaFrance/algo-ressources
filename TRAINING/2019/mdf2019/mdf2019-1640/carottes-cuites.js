/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];

readline_object.on("line", value => {
  //Read input values
  input.push(value);
});
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse);

function ContestResponse() {
  const seek = input.shift();
  input.shift();
  const text = input.join();
  const arrayRegexpChar = seek.split("").map(char => `.*${[".", "!", "?"].includes(char) ? `\\${char}` : char}`);
  const stringRegexpChar = arrayRegexpChar.join("");
  const regex = new RegExp(`^${arrayRegexpChar.join("")}.*$`);
  console.log(regex.test(text) ? 1 : 0);
}
