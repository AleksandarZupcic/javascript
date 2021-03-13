/*
    Create a function that moves all capital letters to the front of a word.
    Keep the original relative order of the upper and lower case letters the same.
*/

const capToFront = (s) => s.match(/[A-Z]/g).join("") + s.match(/[a-z]/g).join("");

console.log(capToFront("hApPy"));       // "APhpy"
console.log(capToFront("moveMENT"));    // "MENTmove"
console.log(capToFront("shOrtCAKE"));   // "OCAKEshrt"

// OK //