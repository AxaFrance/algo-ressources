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
  const [mine, friend] = input;
  const gares = new Array(37).fill(true).map((val, index) => index);
  const [mineDepart, mineLine] = mine.split(" ");
  const [friendDepart, friendLine] = friend.split(" ");
  const mineGare = gares.filter(arret => arret % mineLine == 0 && arret >= mineDepart);
  const friendGare = gares.filter(arret => arret % friendLine == 0 && arret >= friendDepart);
  const intersection = mineGare.filter(value => -1 !== friendGare.indexOf(value));
  console.log(intersection.length > 0 ? Math.min(...intersection) : 36);
}
