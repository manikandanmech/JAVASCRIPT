/*Type Coercion in JavaScript:

  Type coercion in JavaScript refers to the process of converting a value from one data type to another automatically. 

  For example, when a string is added to a number, JavaScript will automatically convert the string to a number before performing the addition. Similarly, when a non-boolean value is used in a boolean context, JavaScript will convert the value to a boolean using a set of rules.  */

  //Type Coercion
 
let a="20";
let b=23;
 
console.log(a+b);
 
 a=Number("20");
 b=23;
 
console.log(a+b);