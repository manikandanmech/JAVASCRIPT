/*  Differences Between var, let, and const in JavaScript >>>
    One of the features that came with ES6 is the addition of let and const, which can be used for variable declaration.

The var keyword is used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
If you want your code to run in older browser, you must use var.
................................................................................................
>>>>>> var
Variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on.

Use the reserved keyword var to declare a variable in JavaScript.
................................................................................................
>>>>> let
let cannot be Redeclared.
let must be Declared before use.
let have Block Scope.
................................................................................................
>>>>> const
const cannot be Redeclared.
const cannot be Reassigned.
const have Block Scope. 
................................................................................................ */

/*
  1997
  var
    2015 E6
  let
  const
*/
 
/*
var a=25;
var b=35;
console.log(a+b);
*/
//--------------------------------------------------------------------------------
//>>>>>> 1.Scope
/*
if(true)
{
  //var msg="Welcome to Tutor Joes";
  //let msg="Welcome to Tutor Joes";
  const msg="Welcome to Tutor Joes";
  //console.log(msg);
}
console.log(msg);
*/
//-----------------------------------------------------------------------
//2.Variable Redeclaration
/*
var a=25;
console.log(a)
 
var a=45;
console.log(a)
 
 
let a=25;
console.log(a)
 
let a=45;
 
 
const a=25;
console.log(a)
 
const a=45;
 
*/
//------------------------------------------------------------------------
//3.Value assignment
/*
var a=25;
console.log(a);
a=45;
console.log(a);
*/
/*
let a=25
console.log(a);
a=45;
console.log(a);
 
const a=25;
console.log(a);
a=45;  //Constant Error
console.log(a);
*/
 
const student={'name':'mani',"age":20};
console.table(student);
console.log(student.name);
student.name='vasu';
console.table(student);
