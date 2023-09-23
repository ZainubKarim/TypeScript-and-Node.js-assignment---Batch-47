/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following: */

// Tests for equality and inequality with strings
const string1: string = "Ayesha";
const string2: string = "ayesha";
console.log(string1 == string2); // False
console.log(string1 != string2); // True 

// Tests using the lower case function
const Text1: String = "OKAY BYE"
const Text2: String = "okay bye"
console.log(Text1.toLowerCase()===Text2); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log(num1 == num2); // False
console.log(num1 != num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False 

// Tests using "and" and "or" operators
const x: number = 5; 
const y: number = 10;
const z: number = 15;

console.log(x < y && z > y); // both conditions are true
console.log(x < y || y < z); // both conditions are true

//  Test whether an item is in a array
const Name: string[] = [
    'Ayesha' , 'Zainub' , 'Kanwal'
];

console.log(Name.includes('Najma')); // False 
console.log(Name.includes('Ayesha')); // True

//  Test whether an item is not in a array 
const Name2: string[] = [
    'Ayesha' , 'Zainub' , 'Kanwal'
];

console.log(!Name2.includes('Najma')); // True 
console.log(!Name2.includes('Ayesha')); // False 


