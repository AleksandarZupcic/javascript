/*
    The left shift operation is similar to multiplication by powers of two.
    Sample calculation using the left shift operator (<<):

    10 << 3 = 10 * 2^3 = 10 * 8 = 80
    -32 << 2 = -32 * 2^2 = -32 * 4 = -128
    5 << 2 = 5 * 2^2 = 5 * 4 = 20

    There will be no negative values for the second parameter y.
    This challenge is more like recreating of the left shift operation, 
    thus, the use of the operator directly is prohibited.
    Alternatively, you can solve this challenge via recursion.
*/

// NO RECURSION OR OPERATOR //
const shiftToLeft = (x, y) => x * 2 ** y;
console.log(shiftToLeft(5, 2));             // 20
console.log(shiftToLeft(10, 3));            // 80

// RECURSION //
const shiftToLeftRecursive = (x, y) => y ? shiftToLeftRecursive(x * 2, y - 1) : x;
console.log(shiftToLeftRecursive(-32, 2));  // -128
console.log(shiftToLeftRecursive(-6, 5));   // -192

// LEFT SHIFT OPERATOR //
const shiftToLeftOperator = (x, y) => x << y;
console.log(shiftToLeftOperator(12, 4));    // 192
console.log(shiftToLeftOperator(46, 6));    // 2944

// OK //