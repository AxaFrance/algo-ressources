//***************************************************************
//*
//*
//* SOLUTION BY juniorft
//*
//*
//******************************************************************
/*******
 * Read input from STDIN
 * Use console.log()  to output your result.
 * Use:
 *      LocalPrint( $variable ); 
 * to display simple variables in a dedicated area.
 * 
 * Use:
 *      LocalPrintArray( $array ); 
 * to display arrays in a dedicated area.
 * ***/

var input = [];

readline_object.on("line", (value) => { //Read input values
  input.push(value);
})
//Call ContestResponse when all inputs are red
readline_object.on("close", ContestResponse);


function checki(val, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return true
    }
  }
  return false
}

function ContestResponse() {
  //implements your code here using input array
  var room = parseInt(input[0]);
  var result = 0;
  var used = [];
  for (var i = 2; i < input.length; i++) {
    if (checki(i, used) == false & parseInt(input[i]) < room) {
      for (var j = i + 1; j < input.length; j++) {
        if (checki(i, used) == false & checki(j, used) == false && ((parseInt(input[i]) + parseInt(input[j])) == room)) {
          result++;
          used.push(i);
          used.push(j);
        }
      }
    } else if (used.indexOf(i) == -1 & parseInt(input[i]) == room) {
      result++;
      used.push(i);
    }
  }
  console.log(result)
}