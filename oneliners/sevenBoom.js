/*
    Create a function that takes an array of numbers and return "Boom!" 
    if the digit 7 appears in the array.
    Otherwise, return "there is no 7 in the array".
*/

const sevenBoom = (arr) => (arr.join("")).match(/7/g) === null ? "there is no 7 in the array" : "Boom!";

console.log(sevenBoom([0, 2, 5, 7]));   // "Boom!"
console.log(sevenBoom([1, 2, 3, 4]));   // "there is no 7 in the array"

// OK //