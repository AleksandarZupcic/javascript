/*
    Create a function that takes the volume of a cube and returns the length of 
    the cube's main diagonal, rounded to two decimal places.
*/

const cubeDiagonal = (volume) => Number((Math.cbrt(volume) * Math.sqrt(3)).toFixed(2));

console.log(cubeDiagonal(8));           // 3.46
console.log(cubeDiagonal(343));         // 12.12
console.log(cubeDiagonal(1157.625));    // 18.19

// OK //