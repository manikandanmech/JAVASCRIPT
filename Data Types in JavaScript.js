/*JavaScript, data types are used to classify different types of data and define the type of values that a variable can hold.
The main data types in JavaScript include:

Primitive data types: 
These are the basic data types that include numbers, strings, booleans, and special values like null and undefined.
_________________________________________________________________________________________________________________________________________________________________________________________
Data Type             |      	Description
______________________|__________________________________________________________________________________________________________________________________________________________________ 
String	              |   A string is a collection of alphanumeric characters.
Number	              |    Numbers are for numbers. We can't put a letter on here.
Boolean               |     Booleans have two values. True and false.
Null and Undefined    |    null and undefined stand for empty. That means they have no value assigned to them.
Symbols	              |   Symbol is a primitive data type of JavaScript.It's a very peculiar data type. Once you create a symbol, its value is kept private and for internal use.
Array	              |   An array is a type of object used for storing multiple values in single variable.
Object Literals	      |    It is a comma-separated list of name-value pairs wrapped in curly braces.
Date	              |     JavaScript does not have a date data type. However, you can use the Date object and its methods to work with dates and times in your applications.
______________________|_______________________________________________________________________________________________________________________________________________________________ */
//Data Types in JavaScript
/*
JS Dynamic Programming
 
String
Number   eg:  1.25,25
Boolean  eg:  True,False
Null
Undefinded 
Symbols  E6
 
 
Array
Object Literals
Date
*/
 
var a=25.5;
var fname="Mani";
var isMarried=false;
var phone=null;
let b;
console.log(typeof b);
 
 
//ES6 2015
 
const s1=Symbol() //dlkfngsgs6565df6
console.log(s1)
 
const s2=Symbol() //fdfgdfg4345345
console.log(s2)
 
console.log(s1==s2);
 
 
var courses=['C','C++','Java'];
var student={
  'name':'mani',
  'age':20
}
var d=new Date();
console.log(d);
console.log(typeof courses); // d,student