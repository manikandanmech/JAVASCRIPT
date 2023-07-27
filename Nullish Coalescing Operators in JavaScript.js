/*
                                Nullish Coalescing Operators in JavaScript
Nullish Coalescing Operator is a relatively new addition to JavaScript.
It provides a concise way to handle default values when dealing with null or undefined values.

The nullish coalescing operator is represented by ??, and it returns the right-hand operand when the left-hand operand is either null or undefined.
 Otherwise, it returns the left-hand operand.

Syntax

             const result = leftOperand ?? rightOperand;
*/

//Nullish coalescing operator (??)

const a=null??'No Value';
console.log(a);

const b=null??45;
console.log(b);

//??=
const user={'name':'hari'};
console.log(user);
console.log(user.name);

user.city??='pudukkottai';
console.log(user.city);
console.log(user);