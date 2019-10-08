Transform input to grid array
```js
const grid = input.map((line) => line.split(" ").map((col) => col));
```
---
Fill grid array with value
```js
const fillGrid = Array(size).fill().map(() => Array(size).fill(defaultValue));
```
---
Multiple returns format (with result as an array)
```js
console.log(result.join(" "));
//with js tools
return result.join(" ");
```
---
Multiple returns format (with result as grid)
```js
result.map((v) => v.join("")).join(" ")
```
---
```js
console.log(result.join("\n"));
//with js tools
return result.join("\n");
```
---
Rotate grid
```js
// base :
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
//
// --------------------------------------------------------------
// flipMatrix([[1,2,3], [4,5,6], [7,8,9]])
// [
//     [1,4,7],
//     [2,5,8],
//     [3,6,9]
// ]
// --------------------------------------------------------------
// flipMatrixCounterClockwise([[1,2,3], [4,5,6], [7,8,9]])
// [
//     [9,6,3],
//     [8,5,2],
//     [7,4,1]
// ]
// --------------------------------------------------------------
//
// 90° rotate
// rotateMatrix([[1,2,3], [4,5,6], [7,8,9]])
// [
//     [7,4,1],
//     [8,5,2],
//     [9,6,3]
// ]
// --------------------------------------------------------------
// 180° rotate
// rotateMatrix(rotateMatrix([[1,2,3], [4,5,6], [7,8,9]]))
// [
//     [7,8,7],
//     [6,5,4],
//     [3,2,1]
// ]
// --------------------------------------------------------------
const flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);

const rotateMatrix = matrix => (
  flipMatrix(matrix.reverse())
);

const rotateMatrixCounterClockwise = matrix => (
  flipMatrix(matrix).reverse()
);

const flipMatrixCounterClockwise = matrix => (
  rotateMatrix(matrix).reverse()
);
```