/*
    Create a function that takes a number as an argument. 
    Add up all the numbers from 1 to the number you passed to the function.
    
    For example, if the input is 4 then your function should return 10 
    because 1 + 2 + 3 + 4 = 10.
*/

const addUpRecursion = (num) => num === 1 ? 1 : num + addUpRecursion(num - 1);
console.log(addUpRecursion(4));     // 10       1 + 2 + 3 + 4
console.log(addUpRecursion(5));     // 91       1 + 2 + 3 + 4 + 5
console.log(addUpRecursion(10));    // 55       1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

const factorialRecur = (num) => num === 0 ? 1 : num * factorialRecur(num - 1);
console.log(factorialRecur(4));     // 10
console.log(factorialRecur(0));     // 24
console.log(factorialRecur(10));    // 3628800

// OK //