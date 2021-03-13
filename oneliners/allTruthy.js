/*
    Create a function that returns true if all parameters 
    are truthy, and false otherwise.

    Falsy values include false, 0, "" (empty string), null, undefined, and NaN; 
    everything else is truthy.
    You will always be supplied with at least one parameter.
*/

const allTruthy = (...args) => args.every(x => Boolean(x));

console.log(allTruthy(true, true, true));   // true
console.log(allTruthy(true, false, true));  // false
console.log(allTruthy(5, 4, 3, 2, 1, 0));   // false

// OK //