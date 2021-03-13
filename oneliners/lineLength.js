/*
    Write a function that takes coordinates of two points on a two-dimensional 
    plane and returns the length of the line segment connecting those two points.
*/

const lineLength = ([x1, y1], [x2, y2]) => Number(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(2));
console.log(lineLength([15, 7], [22, 11]));     // 8.06
console.log(lineLength([0, 0], [0, 0]));        // 0

// USING HYPOT //
const lineLengthHypot = ([x1, y1], [x2, y2]) => Number(Math.hypot(x1 - x2, y1 - y2).toFixed(2));
console.log(lineLengthHypot([0, 0], [1, 1]));   // 1.41

// OK //