// Program which calculates if a number is a palindrome
// Ex: 19291 [OK] | 123 [NO] | 11 [OK]
// Note: Must be done without using String

var isPalindrome = function(x) {
    
    // Edge Cases
    if(x < 0 || x !== 0 && x % 10 === 0){
        return false;
    }
    
    const len = Math.ceil(Math.log10(x + 1)); // Calculate the length of the number
    let halfOne = 1; // First half moduo
    let halfTwo = 10; // Second half moduo

    for(let i = 0; i < len; i++){
        halfOne *= 10; // Multiply with 10 to get the moduo using the number length
    }
    
    while(halfOne > halfTwo) { // Stop when first half is smaller than second half
        if(Math.floor((x % halfOne) / (halfOne / 10)) !== Math.floor((x % halfTwo) / (halfTwo / 10))){
            return false;
            // Compare first number to second number and go to the half
            // If it is not a match then return an instant FALSE
        }
        halfOne /= 10; // Divide moduo for first half: 10000, 1000, 100 etc
        halfTwo *= 10; // Multiply moduo for second half: 100, 1000, 10000 etc
    }
    
    return true; // If everything is okay then the number is a palindrome
}