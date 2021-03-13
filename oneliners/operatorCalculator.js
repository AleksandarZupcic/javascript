/*
	Create a function that takes two numbers and a mathematical operator (+ - / *) 
	which will perform a calculation with the given numbers.
*/

const operatorCalculator = (num1, operator, num2) => (num2 === 0 && operator === "/") 
	? "Can't divide by 0!" 
	: eval(`${num1}${operator}${num2}`);
	
console.log(operatorCalculator(2, "+", 2)); // 4
console.log(operatorCalculator(2, "*", 2)); // 4
console.log(operatorCalculator(4, "/", 2)); // 2
console.log(operatorCalculator(4, "/", 0)); // "Can't divide by 0!"

// OK //