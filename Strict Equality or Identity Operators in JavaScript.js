/* 
In JavaScript, identity operators are used to compare the equality of two values while also considering their data types.
There are two identity operators:

Strict Equality Operator (===)
The strict equality operator (===) checks for equality between two values while considering both their values and data types.
It returns true if both the values and data types are identical, and false otherwise

Equality Operator (==)
The equality operator (==) also checks for equality between two values, but it performs type coercion if the data types are different.
It tries to convert one or both operands to the same type before making the comparison.
*/

//strict equality or Identity Operator

let a=10;
console.log(a);
let b='10';
console.log(a==b);
console.log(a===b);