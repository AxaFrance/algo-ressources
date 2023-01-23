var input = [];

readline_object.on("line", (value) => { //Read input values
  input.push(value);
})
//Call ContestResponse when all inputs are red
readline_object.on("close", ContestResponse);


function ContestResponse() {
  //implements your code here using input array
  var teams = input.map(Number);
  var nbOfPlaces = teams.shift();
  var nbOfTeams = teams.shift();
  var levels = 0;
  for (var i = 0; i < nbOfTeams; i++) {
    for (var j = i - 1; j < nbOfTeams; j++) {
      if (j != i && teams[i] + teams[j] === nbOfPlaces) {
        teams[i] = 0;
        teams[j] = 0;
        levels++;
        continue;
      }
    }
  }
  console.log(levels)
}