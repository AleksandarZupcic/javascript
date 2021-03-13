/*
    Parity bits are used as very simple checksum to ensure that binary data isn't 
    corrupted during transit. Here's how they work:

    If a binary string has an odd number of 1's, the parity bit is a 1.
    If a binary string has an even number of 1's, the parity bit is a 0.
    The parity bit is appended to the end of the binary string.

    Create a function that adds the correct parity bit to a binary string.
*/

const addParityBit = (b) => b += (b.match(/1/g).length % 2 == 0 ? "0" : "1");

console.log(addParityBit("0010110")); // "00101101"
console.log(addParityBit("1100000")); // "11000000"
console.log(addParityBit("1111111")); // "11111111"

// OK //